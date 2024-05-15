const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const key = "e6f01b09f60aaec1d56472ad68a6cffd";

let input = document.querySelector('#cityinput');
let btn = document.querySelector('#searchbtn');
let cityname = document.querySelector('#city');
let temp = document.querySelector('#degree');
let humidity = document.querySelector('#humidity');
let windspeed = document.querySelector('#speed');

let func = async(city) => {
    const response = await fetch(url + city + `&appid=${key}`);
    const data = await response.json();

        cityname.innerHTML = data.name;
        temp.innerHTML = Math.floor(data.main.temp) + "°C";
        humidity.innerHTML = data.main.humidity + " %";
        windspeed.innerHTML = Math.floor(data.wind.speed) + " km/h";

        if(cityname.innerHTML == "undefined") {
            console.log("dfeedededede")
        }
}

btn.addEventListener("click", () => {
    if(input.value) {
    func(input.value);
    }
})