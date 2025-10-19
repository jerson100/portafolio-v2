export const delays = (length: number) =>
  Array.from({ length: length }, () => Math.floor(Math.random() * 1800 + 200));
