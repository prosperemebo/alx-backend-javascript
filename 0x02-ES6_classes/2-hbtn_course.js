export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }

    if (!Array.isArray(students)) {
      throw TypeError('Students must be an array');
    }

    _name = name;
    _length = length;
    _students = students;
  }
}
