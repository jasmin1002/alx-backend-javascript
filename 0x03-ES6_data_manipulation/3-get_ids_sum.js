export default function getStudentIdsSum(list) {
  if (!Array.isArray(list)) return -1;
  let sum = list.reduce((acc, cur) => acc + cur.id, 0);
  return sum;
}
