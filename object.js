//1:
var student = {name : "maha",
               age : 20,
               gender : "female",
               role : "student",
               topper : true};
console.log(student);
console.log("student name: " + student.name);
console.log("student age: " + student.age);
console.log("student gender: " + student.gender);
console.log("student role: " + student.role);
console.log("student topper: " + student.topper);
console.log(typeof[]);

//2:
function maha(){
    console.log("good evening all");
}
maha();

//3:(creating a function inside an object is called methods in object.)
var student = {practice : function maha(){
    console.log("good evening all");
}
}
student.practice();
