export function estimateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.split(" ").length;
  const minutes = words / wordsPerMinute;
  return Math.ceil(minutes);
}

export function removeMarkdown(markdownText: string): string {
  return (
    markdownText
      // Remove headers
      .replace(/(#+\s*)/g, "")
      // Remove bold and italic
      .replace(/(\*\*|\*|__|_)/g, "")
      // Remove links
      .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
      // Remove images
      .replace(/\!\[.*?\]\(.*?\)/g, "")
      // Remove blockquotes
      .replace(/\>\s/g, "")
      // Remove ordered and unordered lists
      .replace(/(\*|\-|\+|\d+\.)\s/g, "")
      // Remove code blocks and inline code
      .replace(/(```.*?```|`.*?`)/gs, "")
      // Remove horizontal rules
      .replace(/(-{3,}|\*{3,}|_{3,})/g, "")
      // Remove extra new lines
      .replace(/\n{2,}/g, "\n")
  );
}
