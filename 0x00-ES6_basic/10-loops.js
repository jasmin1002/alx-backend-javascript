export default function appendToEachArrayValue(array, appendString) {
  for (let item of array) {
    array.push(appendString + item);
    // var value = array[idx];
    // array[idx] = appendString + value;
  }

  return array;
}
