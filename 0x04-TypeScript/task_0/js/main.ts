'use strict';
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: 'Guillaume',
  lastName: 'Sebastian',
  age: 35,
  location: 'San Francisco',
};
const studentTwo: Student = {
  firstName: 'John',
  lastName: 'Cena',
  age: 40,
  location: 'United Kingdom',
};

const studentsList = [studentOne, studentTwo];
console.log(studentsList);

const table = document.createElement('table');
const body = document.querySelector('body')!;

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const fname = document.createElement('td');
  const tlocation = document.createElement('td');
  fname.textContent = student.firstName;
  tlocation.textContent = student.location;
  row.append(fname);
  row.append(tlocation);
  table.appendChild(row);
});

body.append(table);
