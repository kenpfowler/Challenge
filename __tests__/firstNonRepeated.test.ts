import { firstNonRepeated } from "..";

test("Returns an empty string if the input is empty string", () => {
  const output = firstNonRepeated("");
  expect(output).toBe("");
});

test('firstNonRepeated("hello") => "h"', () => {
  const output = firstNonRepeated("hello");
  expect(output).toBe("h");
});

test('firstNonRepeated("aabcc") => "b"', () => {
  const output = firstNonRepeated("aabcc");
  expect(output).toBe("b");
});

test('firstNonRepeated("aaabcc") => "b"', () => {
  const output = firstNonRepeated("aaabcc");
  expect(output).toBe("b");
});

test('firstNonRepeated("    ") => ""', () => {
  const output = firstNonRepeated("   ");
  expect(output).toBe("");
});

test('firstNonRepeated("aabbcc") => ""', () => {
  const output = firstNonRepeated("aabbcc");
  expect(output).toBe("");
});
