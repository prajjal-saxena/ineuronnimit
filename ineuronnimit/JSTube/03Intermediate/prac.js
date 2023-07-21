var name = 'Prajjal';

console.log(name);

function sayName(){
    console.log(name)
    sayNameTwo()
    function sayNameTwo(){
        var name = 'Pandit'
        console.log(name)
    }
}

sayName()