var name = "Prajjal";

console.log("Line number 3", name);

function sayName() {
    // var name  = "Mr. H";
    console.log("Line number 7", name);
    sayNameTwo();

    function sayNameTwo() {
        console.log("Line number 11", name)
    }
}

sayName();



// scopeChaining ma 1 cheej yaad rakhni ha apna sa uppar guy ki ice-cream la sakta ha usa hum 
// ice-cream ka lia puch sakta ha or la bhi sakta ha but apna sa chota wala sa nii puch sakta
// ha or na heee la sakta ha

// Agar hum upar wala example sa sayName ma sa var name hatta da toh sarra output ma prajjal 
// a aga