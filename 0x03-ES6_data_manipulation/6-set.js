export default function setFromArray(array) {
  const unique = new Set();
  if (!Array.isArray(array)) return unique;
  array.forEach((item) => unique.add(item));
  return unique;
}
