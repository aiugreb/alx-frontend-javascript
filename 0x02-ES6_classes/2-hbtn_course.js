export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(value_name) {
    if ((typeof value_name !== 'string') && !(value_name instanceof String)) {
      throw new TypeError('Name must be a string');
    }
    this._name = value_name;
  }

  get length() {
    return this._length;
  }

  set length(value_length) {
    if ((typeof value_length !== 'number') && !(value_length instanceof Number)) {
      throw new TypeError('Length must be a number');
    }
    this._length = value_length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!(students instanceof Array) || !students.every((s) => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
