export default function createReportObject(employeesList) {
  const detail = {
    'allEmployees': employeesList,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    }
  };
  return detail;
}
