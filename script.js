const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const key = "e6f01b09f60aaec1d56472ad68a6cffd";

let input = document.querySelector('#cityinput');
let btn = document.querySelector('#searchbtn');
let cityname = document.querySelector('#city');
let temp = document.querySelector('#degree');
let humidity = document.querySelector('#humidity');
let windspeed = document.querySelector('#speed');
let errormassage = document.querySelector('#errmsg');

let func = async(city) => {
    const response = await fetch(url + city.trim() + `&appid=${key}`);
    const data = await response.json();

        cityname.innerHTML = data.name;

        setTimeout(() => {
        if(cityname.innerHTML == "undefined") {

            temp.innerHTML = "00°C";
            humidity.innerHTML = "00 %";
            windspeed.innerHTML = "00 km/h";

            errormassage.style.visibility = "visible";
            setTimeout(() => {
                errormassage.style.visibility = "hidden";
            }, 5000)
        }
}, 100);

        temp.innerHTML = Math.floor(data.main.temp) + "°C";
        humidity.innerHTML = data.main.humidity + " %";
        windspeed.innerHTML = Math.floor(data.wind.speed) + " km/h";
}

btn.addEventListener("click", () => {
    if(input.value) {
    func(input.value);
    }
})
