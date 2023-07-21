// Destructuring
// const user = ["prajjal", 3, "admin"]

// // var role = user[2];
// // var name = user[0];

// var [name, courseCount, role] = user;


// object destructuring
const myUser ={
    name: "Prajjal",
    courseCount: 5,
    role: "admin"
}

console.log(myUser.courseCount)


const {name, courseCount, role} = myUser;
console.log(courseCount);