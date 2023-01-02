export default function getListStudentIds(students) {
  // returns empty array if argument is other than array
  if (!Array.isArray(students)) return [];
  const studentIds = students.map((student) => {
    return student.id;
  });
  return studentIds;
}
