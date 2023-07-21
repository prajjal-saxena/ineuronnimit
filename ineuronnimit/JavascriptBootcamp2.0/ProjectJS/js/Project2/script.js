let data;

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temperature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

const getData = async(event) =>{
    event.preventDefault();
    if(!inputBox.value){
        alert("Please enter the city name");
        return;
    }

    const city = inputBox.value;
    const fetchData = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=0a3aa3a08f19413280891218231502&q=${city}`
    )

    const orgData = await fetchData.json();
    data = orgData;
    console.log(data)

    countryName.innerHTML = data.location.country
    stateName.innerHTML = data.location.region
    cityName.innerHTML = data.location.name
    humidity.innerHTML = data.location.tz_id
}