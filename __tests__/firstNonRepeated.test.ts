import { firstNonRepeated } from "..";

test("Returns an empty string if the input is empty string", () => {
  const output = firstNonRepeated("");
  expect(output).toBe("");
});

test('Returns "h" if the input is "hello"', () => {
  const output = firstNonRepeated("hello");
  expect(output).toBe("h");
});

test('Returns "b" if the input is "aabcc"', () => {
  const output = firstNonRepeated("aabcc");
  expect(output).toBe("b");
});

test('Returns "b" if the input is "aaabcc"', () => {
  const output = firstNonRepeated("aaabcc");
  expect(output).toBe("b");
});

test('Returns "" if the input is "    "', () => {
  const output = firstNonRepeated("   ");
  expect(output).toBe("");
});

test('Returns "" if the input is "aabbcc"', () => {
  const output = firstNonRepeated("aabbcc");
  expect(output).toBe("");
});
