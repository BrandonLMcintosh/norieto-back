describe("create", () => {
  test("Succeed: with data", (done) => {});
  test("Fail: no data", (done) => {});
});
describe("update", () => {
  test("Succeed: with data", (done) => {});
  test("Fail: no data", (done) => {});
});
describe("delete", () => {
  test("Succeed: with good ID", (done) => {});
  test("Fail: no ID", (done) => {});
  test("Fail: bad ID", (done) => {});
  test("Fail: non-owner", (done) => {});
});
describe("data", () => {
  test("Good: full JSON");
  //should succeed if JSON is "{}"
  test("Good: empty JSON", () => {});
  //should succeed if JSON is missing linked objects (shouldn't generate hyperlinks in the end)
  test("Good: missing components", () => {});
  //should succeed if it's just one device with no connections
  test("Good: single object array", () => {});
  //should fail if data is incorredbly formatted
  test("Bad: incorrect formatting", () => {});
  //should fail if object structure is inconsistent
  test("");
  //should fail if no JSON submitted
});
