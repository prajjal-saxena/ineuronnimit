tipper('80');

function tipper(a){
    var bill = parseInt(a);
    console.log(bill +5)
}

biggerTipper('200')
 var biggerTipper = function (a){
    var bill = parseInt(a);
    console.log(bill +5)
}

// Error: biggerTipper is not a function => Basically this error comes jaise ki humara koi
//                                          function ha biggerTipper but hum usa variable ma
//                                          store kara raha ha toh ya error atti ha kyoki
//                                          agar hamara variable kii jagah function ha toh 
//                                          work kar ja aga code or ya error ni a agi becz
//                                          function jab call hota ha toh code upar sa neecha
//                                          tak code scan hota ha but jaise humna neecha kia 
//                                          ha biggerTipper var neecha bna dia ha wo 1 variable
//                                          ha toh usma poora code scan ni hoga agar hum biggerTipper
//                                          ko neecha likhaga toh code sahi chal ja aga this is
//                                          Hoisting



console.log(name);
var name = 'Prajjal';


// ya upar wali bhi code hoisting ha suppose agar humna console.log name upar likha ha
//    compiler na read baad ma kia compiler(Global context) ko pta ha badma mna dekha ha ya variable so 
//    wo message dekha undefined but agar humna var name = 'prajjal' hatta dia or khali 
//    console.log(name) likha ha toh wo error degga name is not defined




// FULL EXAMPLE HOISTING upar wala kii explain ha
console.log(name);           //undefined
var name = 'prajjal';    

function sayName(){          
    var name = "Mr. H";
    console.log(name)
}
sayName();               //Mr.H

console.log(name)       //prajjal






