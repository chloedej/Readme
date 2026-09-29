// let num = 20;
// while (num >= 0) {
//     console.log(num);
//          num = num - 3;
// }


// let grades = [95, 42, 88, 30, 71];
// for (let grade of grades) {
//     if (grade < 70) {
//         continue;
//     }

//     console.log(grade);
// }


function calculateTip(bill, percent) {
    let tip = bill * (percent / 100);
    let total = bill + tip;

    return total;
}
console.log(calculateTip(100, 20));