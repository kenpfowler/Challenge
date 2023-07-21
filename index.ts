export function firstNonRepeated(input: string, previous?: string) {
  if (!input.length) {
    return "";
  }

  const current = input.charAt(0);
  const next = input.charAt(1);

  // base case
  if (current !== next && current !== previous) {
    return current;
  }

  //recursive case
  return firstNonRepeated(input.substring(1), current);
}

export async function concurrency(...args: Promise<unknown>[]) {
  const results = await Promise.allSettled(args);
  return results;
}
