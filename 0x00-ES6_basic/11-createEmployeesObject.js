export default function createEmployeesObject(departmentName, employee) {
  const overview = {
    [`${departmentName}`]: employee
  };
  return overview;
}