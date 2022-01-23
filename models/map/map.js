const db = require("../../db/db");
const { BadRequestError, NotFoundError } = require("../expressError");

class Map {
  static dataCheck(dataJson) {
    const dataObj = JSON.parse(dataJson);
    function _checkEmpty(data) {
      if (Object.keys(data).length > 0) return false;
      return true;
    }
    function _checkObjectArray(data) {
      for (device of data.devices) {
        const deviceName = Object.keys(device)[0];
        if (typeof device !== "object")
          throw new BadRequestError(
            (message =
              "Bad Request: Devices array must contain object data type")
          );
        if (Object.keys(device).length !== 1)
          throw new BadRequestError(
            (message =
              "Bad Request: Device objects must only have one property")
          );
        function _getDeviceKeyValue(device) {
          return Object.values(device)[0];
        }
        if (!Array.isArray(_getDeviceKeyValue(device)))
          throw new BadRequestError(
            (message =
              "Bad Request: Device object key value must be array data type")
          );
        function _checkPortArray(device) {
          const maxIndexRef = data.devices.length - 1;
          const portIndices = _getDeviceKeyValue(device);
          for (index in portIndices) {
            if (portIndices[index] > maxIndexRef)
              throw new BadRequestError(
                (message = `Bad Request: Device index reference out of range on ${deviceName} at port ${index}`)
              );
          }
        }
        _checkPortArray(device);
        return true;
      }
    }
    if (!_checkEmpty(dataObj)) {
      return _checkObjectArray(dataObj);
    }
  }

  static async update({ data }) {
    if (this.dataCheck(data)) {
      const result = await db.query(
        `UPDATE users
         SET map
         WHERE username = $1`
      );
    }
  }

  static async delete(id) {}
}

module.exports = Map;
