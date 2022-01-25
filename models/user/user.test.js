const User = require("./user");

const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../../expressError");
const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterAll,
  commonAfterEach,
} = require("../_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterAll(commonAfterAll);
afterEach(commonAfterEach);

describe("Register", () => {
  test("Pass: unique username, has password", (done) => {});
  test("Fail: existing username, has password", (done) => {});
  test("Fail: unique username, no password", (done) => {});
});
describe("Login", () => {
  test("Pass: Correct username / password", (done) => {});
  test("Fail: bad username, good password", (done) => {});
  test("Fail: good username, bad password", (done) => {});
});
