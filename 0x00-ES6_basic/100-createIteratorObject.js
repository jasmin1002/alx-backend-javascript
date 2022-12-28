export default function createIteratorObject(report) {
  const members = [];
  for (const employees of Object.values(report.allEmployees)) {
    for (const staff of employees) {
      members.push(staff);
    }
  }
  let idx = 0;
  return {
    [Symbol.iterator]() {
      return {
        next() {
          return idx < members.length
            /* eslint-disable */
            ? { done: false, value: members[idx++] }
            : { done: true };
        },
      };
    },
  };
}
