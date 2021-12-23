"use strict";

beforeAll(function () {
  process.env.SECRET_KEY = "secretkey123";
  process.env.PORT = "7000";
  process.env.DATABASE_URL = "randomdatabaseURL";
  process.env.NODE_ENV = "default";
});

describe("Environment configuration", function () {
  test("can pull values from environment", function () {
    const config = require("./config");
    expect(config.SECRET_KEY).toEqual("secretkey123");
    expect(config.PORT).toEqual(7000);
    expect(config.getDatabaseUri()).toEqual("randomdatabaseURL");
    expect(config.BCRYPT_WORK_FACTOR).toEqual(12);
  });

  test("registers as test environment when set to test", function () {
    const config = require("./config");
    delete process.env.DATABASE_URL;
    expect(config.getDatabaseUri()).toEqual("jobly");
    process.env.NODE_ENV = "test";
    expect(config.getDatabaseUri()).toEqual("jobly_test");
  });
});

afterAll(function () {
  delete process.env.SECRET_KEY;
  delete process.env.PORT;
  delete process.env.BCRYPT_WORK_FACTOR;
  delete process.env.DATABASE_URL;
});
