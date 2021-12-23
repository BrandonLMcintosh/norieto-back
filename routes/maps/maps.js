"use strict";

const jsonschema = require("jsonschema");
const Map = require("../../models/map/map");
const express = require("express");
const router = new express.router();
const mapPostSchema = require("../../schemas/map/mapNew.json");
const { BadRequestError } = require("../../expressError");
const {
  authenticateJWT,
  ensureCorrectUserOrAdmin,
} = require("../../middleware/auth");

router.post(
  "/create",
  authenticateJWT,
  ensureCorrectUserOrAdmin,
  async function () {}
);

router.put(
  "/:id",
  authenticateJWT,
  ensureCorrectUserOrAdmin,
  async function () {}
);

router.delete(
  "/:id",
  authenticateJWT,
  ensureCorrectUserOrAdmin,
  async function () {}
);

module.exports = router;
