export function firstNonRepeated(input: string, cache?: string) {
  if (!input.length) {
    return "";
  }

  const current = input.charAt(0);
  const next = input.charAt(1);

  // base case
  if (current !== next && current !== cache) {
    return current;
  }

  //recursive case
  return firstNonRepeated(input.substring(1), current);
}
