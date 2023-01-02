export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) return [];
  return students.filter(student => {
    if (student.location === city) return student;
  });
}
