import { concurrency } from "..";

type Status = PromiseSettledResult<unknown>["status"];
function initialize() {
  const promise1 = Promise.resolve(3);
  const promise2 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, "foo")
  );

  return [promise1, promise2];
}

const promises = initialize();

test("Should return a promise", async () => {
  const results = await concurrency(...promises);
  return results;
});

test("Should return a results array that is equal length to the input array", async () => {
  const results = await concurrency(...promises);

  expect(results.length).toBe(promises.length);
});

test("Should return status of fulfilled for resolved promise", async () => {
  const results = await concurrency(...promises);
  const expected: Status = "fulfilled";

  expect(results[0].status).toBe(expected);
});

test("Should return status of rejected for rejected promise", async () => {
  const results = await concurrency(...promises);
  const expected: Status = "rejected";

  expect(results[1].status).toBe(expected);
});
