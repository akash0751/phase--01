const students = [
    { name: "Akash", age: 20, grades: [85, 90, 78] },
    { name: "Arnav", age: 19, grades: [88, 76, 95] },
    { name: "Adhithya", age: 21, grades: [92, 89, 84] },
    { name: "Bhargav", age: 20, grades: [80, 70, 88] },
    { name: "ChinnaThambi", age: 21, grades: [75, 90, 82] }
];

const studentNames = students.map(student => student.name);
console.log("Student Names:", studentNames);

const studentsOver20 = students.filter(student => student.age > 20);
console.log("Students Older Than 20:", studentsOver20);


const totalGrades = students.reduce((sum, student) => 
    sum + student.grades.reduce((a, b) => a + b, 0) / student.grades.length, 0);
const averageGrade = totalGrades / students.length;
console.log(`Average Grade for All Students: ${averageGrade.toFixed(2)}`);

const avgGradeOver20 = students
    .filter(student => student.age > 20)
    .reduce((sum, student, _, array) => 
        sum + student.grades.reduce((a, b) => a + b, 0) / student.grades.length / array.length, 0);

console.log(`Average Grade for Students Older Than 20: ${avgGradeOver20.toFixed(2)}`);
