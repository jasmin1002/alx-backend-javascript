function cleanSet(set, startString) {
  if (
    !(set instanceof Set)
    || !startString
    || typeof startString !== 'string'
  ) return '';
  const newArr = [];
  for (const entry of set) {
    if (typeof entry === 'string' && entry.startsWith(startString)) {
      newArr.push(entry.substring(startString.length));
    }
  }
  return newArr.join('-');
}
export default cleanSet;
