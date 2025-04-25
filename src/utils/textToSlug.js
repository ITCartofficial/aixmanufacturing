export function textToSlug(text = "") {
  return text.toLowerCase().split(" ").join("-");
}
