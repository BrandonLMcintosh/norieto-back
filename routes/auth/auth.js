"use strict";

const express = require("express");
const router = new express.router();

const jsonschema = require("jsonschema");
const userAuthSchema = require("../../schemas/user/userAuth.json");
const userRegisterSchema = require("../../schemas/user/userRegister.json");

const User = require("../../models/user/user");

const { createToken } = require("../../helpers/tokens");
const { BadRequestError } = require("../../expressError");
const res = require("express/lib/response");
const { noExtendLeft } = require("sequelize/types/lib/operators");
const req = require("express/lib/request");

router.post("/login", async function () {
  try {
    const validator = jsonschema.validate(req.body, userAuthSchema);
    if (!validator.valid) {
      const errs = validator.errors.map((err) => err.stack);
      throw new BadRequestError(errs);
    }

    const { username, password } = req.body;
    const user = await User.authenticate(username, password);
    const token = createToken(user);
    return res.status(200).json({ token });
  } catch (err) {
    return next(err);
  }
});

router.post("/register", async function () {
  try {
    const validator = jsonschema.validate(req.body, userRegisterSchema);
    if (!validator.valid) {
      const errs = validator.errors.map((err) => err.stack);
      throw new BadRequestError(errs);
    }

    const newUser = await User.register({ ...req.body });
    const token = createToken(newUser);
    return res.status(201).json({ token });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
