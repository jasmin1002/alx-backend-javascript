export default function (length, position, value) {
  // Implementation
  const typedArray = new ArrayBuffer(length);
  const int8View = new DataView(typedArray);
  if (position < 0 || position >= length) throw new Error('Position outside range');
  int8View.setInt8(position, value);
  return int8View;
}
