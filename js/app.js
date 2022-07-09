let student_name = "Gabriel";
let student_gpa = 4;
let honor_role = true;

if(honor_role) {
    console.log("Congratulations!");
} else {
    console.log("Nice try student. Study more.");
}


if (student_gpa >= 0 && student_gpa <= 1.9) {
    console.log("F");
} else if (student_gpa >= 2 && student_gpa <= 2.4) {
    console.log("D");
} else if (student_gpa >= 2.5 && student_gpa <= 2.9) {
    console.log("C");
} else if (student_gpa >= 3 && student_gpa <= 3.4) {
    console.log("B");
} else {
    console.log("A");
}

let student_names = [`Gabriel`, `Alex`, `Colleen`];
let student_gpas = [4, 3, 2];
let honor_roles = [true, false, true];

if (honor_roles[0] && honor_roles[1] && honor_roles[2]) {
    console.log("Congratulations you all.")
} else if ((honor_roles[0] && honor_roles[1]) || (honor_roles[0] && honor_roles[2]) || (honor_roles[1] && honor_roles[2])){
    console.log("I want all of you being good at it.")
} else {
    console.log("Study more.")
}

student_names.push(`James`);
student_gpas.push(4);
honor_roles.push(true);

let last_student = student_names.pop();
let last_student_gpa = student_gpas.pop();
let last_student_honor = honor_roles.pop();

if ((last_student_gpa > student_gpas[0]) || (last_student_gpa > student_gpas[1]) || (last_student_gpa > student_gpas[2]) || (last_student_gpa > student_gpas[3])) {
    console.log("Last student is the best student.")
} else {
    console.log("Last student is not the best student.")
}