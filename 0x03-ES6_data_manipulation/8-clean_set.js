function cleanSet(set, startString) {
  if (!(set instanceof Set) || !startString) return '';
  const newArr = [];
  for (const entry of set) {
    if (entry.startsWith(startString)) {
      newArr.push(entry.substring(startString.length));
    }
  }
  return newArr.join('-');
}
export default cleanSet;
