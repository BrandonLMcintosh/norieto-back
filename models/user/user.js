"use strict";

const db = require("../../db/db");
const bcrypt = require("bcrypt");
const {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} = require("../../expressError");
const { BCRYPT_WORK_FACTOR } = require("../../config/config");

class User {
  static async get(username) {}

  static async register({ username, password }) {}

  static async login({ username, password }) {}

  static async delete({ username }) {}
}

module.exports = User;
