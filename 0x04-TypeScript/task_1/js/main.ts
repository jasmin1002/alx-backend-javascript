'use strict';
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [otherProps: string]: any;
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
console.log(joda);
