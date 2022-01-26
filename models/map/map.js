const db = require("../../db/db");
const { BadRequestError, NotFoundError } = require("../expressError");

class Map {
  static async update(data, username) {
    const result = await db.query(
      `UPDATE users
         SET map = $1
         WHERE username = $2`,
      [data, username]
    );
  }

  static async delete(username) {
    const result = await db.query(
      `UPDATE users
       SET map = "{}"::JSONB
       WHERE username = $1`,
      [username]
    );
  }
}

module.exports = Map;
