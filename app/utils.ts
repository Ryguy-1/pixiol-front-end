export function estimateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.split(" ").length;
  const minutes = words / wordsPerMinute;
  return Math.ceil(minutes);
}
