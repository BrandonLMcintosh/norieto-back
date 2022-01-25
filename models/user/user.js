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
  static async register({ username, password }) {
    const duplicateCheck = await db.query(
      `SELECT username
       FROM users
       WHERE username = $1`,
       [username]
    );

    if(duplicateCheck.rows[0]){
      throw new BadRequestError(`User already exists: ${username}`)
    }

    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

    const result = await db.query(
      `INSERT INTO users
       (username,
        password,
        map)
        VALUES ($1, $2, $3)
        RETURNING username, map`,
        [username, hashedPassword, {}]
    )

    const user = result.rows[0];

    return user;
  }

  static async login(username, password) {
    const result = db.query(
      `SELECT username,
              password,
              map
       FROM users
       WHERE username = $1`,
       [username]
    );

    const user = result.rows[0];

    if(user){
      const isValid = await bcrypt.compare(password, user.password);
      if(isValid){
        delete user.password;
        return user;
      }
    }

    throw new UnauthorizedError("Invalid username/password");
  }
}

module.exports = User;
