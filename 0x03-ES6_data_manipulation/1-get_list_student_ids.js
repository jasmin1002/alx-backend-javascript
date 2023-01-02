export default function getListStudentIds(students) {
  // returns empty array if argument is other than array
  if (!Array.isArray(students)) return [];
  return students.map((student) => student.id);
}
