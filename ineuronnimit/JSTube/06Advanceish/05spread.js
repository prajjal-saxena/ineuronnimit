// spread and rest operator


// var returnedValue = Math.max(2, 5,7, 4, 2,8);
// console.log(returnedValue);


// var myObj ={}
// console.log(myObj)
// Object.assign(myObj, {a:1, b:2, c:3},{z:9, y:8, x:7})
// console.log(myObj)




// spread operator : ya individually latta ha values
function sumOne(a, b){ // yaha 2 value ha toh ya 2 value heee laga 
    return a + b;
}
// var myA = [5,4];     
// console.log(sumOne(...myA)) // yaha sa bhej raha ha value


//rest operator
function sumTwo(a,b,...args) {
    console.log(args) //ya array ma lagga value
    let multi = a*b;

    let sum =0;
    for (const arg of args) {
        sum += arg;
    }
    return [sum, multi];
}

console.log(sumTwo(5,4,1,1,1))
