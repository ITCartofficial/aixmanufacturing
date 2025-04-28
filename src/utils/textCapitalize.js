export default function textCapitalize(str) {
  str = str.split("_").join(" ");
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
