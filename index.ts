export function firstNonRepeated(input: string) {
  const inputArray = input.split("");
  let currentIndex = 0;
  let cache;

  if (!input.length) {
    return "";
  }

  while (currentIndex < inputArray.length) {
    const currentChar = inputArray[currentIndex];
    const nextChar = inputArray[currentIndex + 1];

    if (currentChar !== nextChar && currentChar !== cache) {
      return currentChar;
    }

    cache = currentChar;
    currentIndex++;
  }

  return "";
}
