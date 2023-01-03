// function hasValuesFromArray(set, array) {
//   // Implementation
//   if (!Array.isArray(array)) return -1;
//   const arrayFromSet = Array.from(set);
//   const assert = array.every((element) => arrayFromSet.includes(element));
//   return assert;
// }

function hasValuesFromArray(set, array) {
  for (const entry of array) {
    if (!set.has(entry)) return false;
  }
  return true;
}
export default hasValuesFromArray;
