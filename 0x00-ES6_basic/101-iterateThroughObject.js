export default function iterateThroughObject(reportWithIterator) {
  const formatString = [];

  for (const item of reportWithIterator) {
    formatString.push(item);
  }
  return formatString.join(' | ');
}
