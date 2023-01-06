'use strict';
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [otherProps: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const joda: Teacher = {
  firstName: 'Olushola',
  lastName: 'Joda',
  fullTimeEmployee: true,
  location: 'Benin',
  yearsOfExperience: 5,
  project: 'Senior Secondary School',
  isHeadTeacher: true,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
}
console.log(joda);
console.log(director1);
