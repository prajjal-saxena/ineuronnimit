const uno = () =>{
    console.log("I am one");
}

const dos = () =>{
    console.log("I am two");
    setTimeout(()=>{
        console.log("Wooohooooo")
    }, 3000)
}

const tres = () =>{
    console.log("I am three");
}

uno();
dos();
tres();