var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

// for (let key of myMap.keys()){
//     console.log(`key is ${key}`)
// }
// for (let values of myMap.values()){
//     console.log(values)
// }

// for (let [key, value] of myMap){
//     console.log(`Key is ${key} and value is ${value}`)
// }


// myMap.forEach((key) => console.log(`${key}`))

myMap.forEach((v,k) => console.log(`Value is ${v} and Key is ${k}`))

myMap.delete(2);
console.log(myMap)