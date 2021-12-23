"use strict";

const jsonschema = require("jsonschema");
const User = require("../../models/user/user");
const express = require("express");
const router = new express.router();
const { createToken } = require("../../helpers/tokens");
const userAuthSchema = require("../../schemas/user/userAuth.json");
const userRegisterSchema = require("../../schemas/user/userRegister.json");
const { BadRequestError } = require("../../expressError");

router.post("/token", async function () {});

router.post("/register", async function () {});

module.exports = router;
