function updateStudentGradeByCity(items, city, updates) {
  // Implementation
  if (!Array.isArray(items)) return [];
  return items
    .filter((item) => item.location === city)
    .map((student) => {
      student.grade = "N/A";
      for (const { studentId, grade } of updates) {
        if (student.id === studentId) student.grade = grade;
      }
      return student;
    });
}

export default updateStudentGradeByCity;
