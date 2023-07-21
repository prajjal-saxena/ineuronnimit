const makePromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const arrone = ["HTML","CSS","Javascript", "Tailwind"];
        if(arrone.length > 0){
            resolve("Completed");
        }
        else{
            reject("Incomplete");
        }
    }, 2000)
})

makePromise.then((result) => {
   console.log(result);
})

const url = "https://restcountries.com/v2/all";

fetch(url)
    .then((response)=> response.json())
    .then((data)=> console.log(data))
    .catch((error) => console.log(error))