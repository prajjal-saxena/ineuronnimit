const User = require("../06Advanceish/06classsesjs");

const prajjal = new User("prajjal" , "prajjal@gamil.com")
console.log(prajjal.getInfo());
prajjal.enrollCourse("React Bootcamp");
prajjal.enrollCourse("Angular Bootcamp");

console.log(prajjal.getCourseList());


let courses = prajjal.getCourseList();
courses.forEach((c) =>{
    console.log(c)
})