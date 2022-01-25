"use strict";

const express = require("express");
const router = new express.router();

const jsonschema = require("jsonschema");
const mapUpdateSchema = require("../../schemas/user/mapUpdate.json");

const { BadRequestError } = require("../../expressError");
const {
  authenticateJWT,
  ensureLoggedIn,
  ensureCorrectUser,
} = require("../../middleware/auth");

const Map = require("../../models/map/map");

router.post(
  "/",
  authenticateJWT,
  ensureLoggedIn,
  async function (req, res, next) {
    try {
      await Map.update(req.body, res.locals.user.username);
      res.status(200).json({
        Message: `successful update to user map: ${res.locals.user.username}`,
      });
    } catch (err) {
      return next(err);
    }
  }
);

router.delete(
  "/",
  authenticateJWT,
  ensureLoggedIn,
  async function (req, res, next) {
    try {
      await Map.delete(res.locals.username);
      res.status(200).json({
        Message: `Successful deletion of user map: ${res.locals.user.username}`,
      });
    } catch (err) {
      return next(err);
    }
  }
);

module.exports = router;
