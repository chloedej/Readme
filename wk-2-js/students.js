const students = [
    { name: "Ana", age: 24, grades: [92, 86, 73], enrolled: true },
    { name: "Misha", age: 29, grades: [98, 100, 89], enrolled: false },
    { name: "Lily", age: 21, grades: [83, 75, 74], enrolled: true },
    { name: "Miranda", age: 47, grades: [63, 52, 59], enrolled: false },
    { name: "Samuel", age: 63, grades: [99, 100, 95], enrolled: true },]


function addStudent(name, age, grades, enrolled) {
    const newStudent = { name: "Chloe", age: 25, grades: [88, 92, 79], enrolled: true };
    students.push(newStudent);
    return newStudent;
}


// // console.log(students);
// console.log(students.splice (2, 1));


// function removeStudentByName(name) {
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].name === name) {
//             const removedStudent = students.splice(i, 1);
//             return removedStudent[0];
//         }
//     }

//     return null;
// }
// console.log(removeStudentByName("Lily"));
// console.log(removeStudentByName("Misha"));




function calculateAverage(student){
    let total = 0;
    for (let grade of student.grades) {
        total += grade;
    }
let Samuel = students[4];
console.log(Samuel);
console.log(calculateAverage(Samuel));
    return total/numOfGrades;
}


let Misha = students[1];
console.log(Misha);
console.log(calculateAverage(Misha));
