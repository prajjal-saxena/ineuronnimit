function init(){
    var firstName ="Prajjal";
    console.log("I m init");

    function sayFirstName(){
        console.log(firstName)
    }
    return sayFirstName;  // yaha hum reference return karra raha ha agar hum esma sayfirstName() as likhaga toh ho ja aga run
}

//init(); // agar hum ya likhaga bss toh hamara bss i m init output a aga compiler andar toh ja aga but init ka 
        // but reference return jo ho raha ha sayFirstName ka wo nii hoga uska lia hamma neecha wala step follow
        // karna hoga
var value = init()
value(); //This is the closure




// One more example
function doAddition(x){
    return function(y){   // ya reference return ho raha ha 
        return x+y;
    }
}

var add5 =doAddition(5);
console.log(add5(4))


console.log(add5(5)(5)) //eska output 10 a aga kyoki abhi bhi memory la rakhi ha upar wala na or closure ki wajah sa possible ha ya it is called curring
