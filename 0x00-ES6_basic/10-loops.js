export default function appendToEachArrayValue(array, appendString) {
  for (const item of array) {
    // array.push(appendString + item);
    const idx = array.indexOf(item);
    array[idx] = appendString + item;
    // console.log(array.indexOf(idx));
  }

  return array;
}
