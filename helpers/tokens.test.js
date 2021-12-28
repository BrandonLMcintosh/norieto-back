const jwt = require("jsonwebtoken");
const { createToken } = require("./tokens");
const { SECRET_KEY } = require("./config/config");

describe("createToken", function () {
  test("succeeds: any username", function () {
    const token = createToken({ username: "test_user" });
    const payload = jwt.verify(token, SECRET_KEY);
    expect(payload).toEqual({ iat });
  });
});
