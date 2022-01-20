const db = require("../../db/db");
const { BadRequestError, NotFoundError } = require("../expressError");

class Map {
  static async create({ data }) {
    function duplicateCheck() {}
    function addMap() {}
    duplicateCheck();
    addMap();
  }

  static async update({ data }) {}

  static async delete(id) {}
}

module.exports = Map;
