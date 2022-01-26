const Map = require("./map");

const {
  commonAfterAll,
  commonBeforeAll,
  commonAfterEach,
  commonBeforeEach,
} = require("../_testCommon");

afterAll(commonAfterAll);
afterEach(commonAfterEach);
beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);

describe("update", () => {
  test("Succeed: with data", (done) => {});

  test("Fail: no data", (done) => {});
});

describe("delete", () => {
  test("Pass: with Username", (done) => {});
  test("Fail: no username", (done) => {});
});
