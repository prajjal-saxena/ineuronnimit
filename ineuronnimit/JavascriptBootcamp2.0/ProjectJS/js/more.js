//spread and rest ...

function sumone(x, y){
    return x + y;
}

let vari = [5, 7];
// console.log(sumone(...vari)) // It store multiple data into single variable and pass of the parameter


//REST 
function sum(...args) {
    // console.log(args)
    let sum = 0;
    for (const x of args) {
        sum = sum + x;
    }
    return sum;
}

// console.log(sum(1,2,3,4,5,6,7,8,9,0))


/// try catch

// try {
//     let firstname = "Anurag";
//     console.log(firstname + " " + lastname);
// }catch(err){
//     console.log("Variable name is missing");
// }finally{
//     console.log("I will run");
// }


// Different type of error we have in javascript

// - Reference Error
// - Syntax Error
// - Type Error


//Event Loop
const userOne = () =>{
    console.log("hello one");
}

const userTwo = () => {
    setTimeout(() => {
        console.log("Hello i am inside");
    }, 3000)
    console.log("Hello two");
}

const userthree = () =>{
    console.log("hello three");
}


// Promise

const one = () =>{
    return "I am one.";
}
const two = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Credential Correct");
        }, 3000)
    })
}
const three = () =>{
    return "I am three"
}

const callMe = async() => {
    let Valone = one();
    console.log(Valone);

    let ValTwo =await two();
    console.log(ValTwo);

    let ValThree = three();
    console.log(ValThree);
}

callMe();

