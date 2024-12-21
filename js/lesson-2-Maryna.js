// Угруповання об‘єктів студентів по курсам
// Створіть масив об‘єктів, що являють собою різних студентів. Кожен об‘єкт повинен містити властивості ім‘я, вік та курс.
// Використовуйте цикл for...of, щоб згрупувати студентів за курсами.
// Результатом буде об‘єкт, де ключами будуть назви курсів, а значення - масиви об’єктів студентів, що належать до відповідного курсу.

// Очікуванний результат:
// const groupedStudents = {
//   Java: [
//     { name: “Алиса“, age: 20, course: “Java” },
//     { name: “Карл“, age: 21, course: “Java” },
//   ],
//   Python: [{ name: “Боб“, age: 22, course: “Python” }],
//   JavaScript: [{ name: “Джон“, age: 23, course: “JavaScript” }],
// };

const students = [
  { name: "Алиса", age: 20, course: "Java" },
  { name: "Боб", age: 22, course: "Python" },
  { name: "Карл", age: 21, course: "Java" },
  { name: "Джон", age: 23, course: "JavaScript" },
];

function groupStudentsCourse() {
  let groupedStudentsCourse = {};
  for (const student of students) {
    const course = student.course;

    if (!groupedStudentsCourse[course]) {
      groupedStudentsCourse[course] = [];
    }
    groupedStudentsCourse[course].push(student);
  }
  return groupedStudentsCourse;
}

console.log(groupStudentsCourse(students));

//  1 ітерація
// виконався рядок 31  groupedStudents.Java
// {}
// виконався рядок 32  {Java: []}
// виконався рядок 35  {Java: [ { name: “Алиса“, age: 20, course: “Java” }]}
//  2 ітерація
// виконався 31
// {Java: [ { name: “Алиса“, age: 20, course: “Java” }]}
// виконався рядок 32
// {Java: [ { name: “Алиса“, age: 20, course: “Java” }], Python: []}
// виконався рядок 35
//{Java: [ { name: “Алиса“, age: 20, course: “Java” }], Python: [{ name: “Боб“, age: 22, course: “Python” }]}
//  3 ітерація
// виконався 31
// {Java: [ { name: “Алиса“, age: 20, course: “Java” }], Python: [{ name: “Боб“, age: 22, course: “Python” }]}
// виконався рядок 32
// {Java: [ { name: “Алиса“, age: 20, course: “Java” }], Python: [{ name: “Боб“, age: 22, course: “Python” }]}
// виконався рядок 35
// {Java: [ { name: “Алиса“, age: 20, course: “Java” }, { name: “Карл“, age: 21, course: “Java” }], Python: [{ name: “Боб“, age: 22, course: “Python” }]}
//  4 ітерація
// виконався 31
// {Java: [ { name: “Алиса“, age: 20, course: “Java” }, { name: “Карл“, age: 21, course: “Java” }], Python: [{ name: “Боб“, age: 22, course: “Python” }]}
// виконався рядок 32
// {Java: [ { name: “Алиса“, age: 20, course: “Java” }, { name: “Карл“, age: 21, course: “Java” }], Python: [{ name: “Боб“, age: 22, course: “Python” }], JavaScript: []}
// виконався рядок 35
//  {Java: [ { name: “Алиса“, age: 20, course: “Java” }, { name: “Карл“, age: 21, course: “Java” }], Python: [{ name: “Боб“, age: 22, course: “Python” }], JavaScript: [ { name: “Джон“, age: 23, course: “JavaScript” }]}
