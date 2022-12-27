export default function appendToEachArrayValue(array, appendString) {
  for (const item of array) {
    let idx = array.indexOf(item);
    array[idx] = appendString + item;
  }

  return array;
}
