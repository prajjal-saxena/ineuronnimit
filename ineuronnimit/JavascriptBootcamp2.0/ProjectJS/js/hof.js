//HOF => Higher order function
// CALLBACK
// function is calling a function
// Higher order functions are functions which take other function as a parameter or 
// return a function as a value. The function passed as a parameter is called callback.

// function a(){
//     console.log("I was called by a function");
// }

// function b(){
//     a();
// }

// b();

const arr = ["hey","hi","hello","hola","Namaste"];


// arr.forEach(myfunc);

// function myfunc(val){
//     console.log(val);
// }

arr.forEach((val) =>{
    console.log(val);
})


//Set time out

// setTimeout(() => {
//     console.log("Hello FSJS2")
// }, 3000);

// function Mayur() {
//     console.log("Hello FSJS2");
// }

// setTimeout(()=>{}, 3000);

// setInterval(()=>{
//     console.log("`🙂`");
// }, 1000)

// MAP
// const numbers = [1,2,3,4,5,6]
// const numSqu = numbers.map((num)=> num*num);
// console.log(numSqu);

// FILTER
const count = [
    "India",
    "Pakistan",
    "Canada",
    "Ireland",
    "Japan",
    "Kenya",
    "Finland",
    "Germany",
    "Srilanka",
    "Bharat"
]
const store = count.filter((val) => val.includes("land"));
// console.log(store);


// Reduce

const num = [1,2,3,4,5,6,7];
const sum = num.reduce((acc, curr) => acc + curr, 1);
// console.log(sum);

// Sort
const names = [
    "Anurag",
    "Anirud",
    "Hitesh",
    "Vyom",
    "Bishal",
    "Mayur",
    "Sneha",
    "momin",
    "Surya"
]
// console.log(names.sort())


// destructuring and Spread and Rest
const sci = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, grav, bodytemp, boiltemp] = sci;
console.log(e, pi, grav, bodytemp, boiltemp);



const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
let [num1, num2, ...rest] = arr2;
console.log(num1, num2);
console.log(rest);