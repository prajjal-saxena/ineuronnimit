const uno = () =>{
    return "I am one";
}

// const dos = () =>{   //agar hum yaha async likh danga toh ya Promise return karaga
//     setTimeout(()=>{
//         return "I am two";
//     }, 3000)
// }
const dos = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("I am two");
        }, 3000)
    })
}

const tres = () =>{
    return "I am three";
}

const callMe = async()=>{
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();   // yaha async kuch nii karaga bss await create karaga bahut sarra but jab hum await lga danga toh wo ya phala resolve karaga then aga ja aga
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
}

callMe();