import { concurrency } from "..";

type Status = PromiseSettledResult<unknown>["status"];

function initialize() {
  const resolvedPromise = Promise.resolve(3);
  const rejectedPromise = new Promise((resolve, reject) =>
    setTimeout(reject, 100, "foo")
  );

  return [resolvedPromise, rejectedPromise];
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
  const [resolved] = await concurrency(...promises);
  const expected: Status = "fulfilled";

  expect(resolved.status).toBe(expected);
});

test("Should return status of rejected for rejected promise", async () => {
  const [, rejected] = await concurrency(...promises);
  const expected: Status = "rejected";

  expect(rejected.status).toBe(expected);
});
