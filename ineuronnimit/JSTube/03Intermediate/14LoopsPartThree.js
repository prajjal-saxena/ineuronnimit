// Basicallly (for of) is use in array
const names = ["YouTube", "facebook", "Instagram", "Netflix", "Amazon"]

// for (const n of names){
//     console.log(n)
// }


// Basically for the objects we use (for in)
const symbols = {
    yt : "YouTube",
    ig : "Instagram",
    fb : "Facebook",
    lco : "LearnCodeOnline"
}

for (const n in symbols){   
    // console.log(n)   //It gives us the key of object
    console.log(symbols[n]);
}