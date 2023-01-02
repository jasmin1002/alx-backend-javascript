export default function getStudentIdsSum(list) {
  if (!Array.isArray(list)) return -1;
  return list.reduce((acc, cur) => acc + cur.id, 0);
}
