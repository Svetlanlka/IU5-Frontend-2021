console.log("start");
const init_city = "Москва"

let weather_data;
let weather_field = document.getElementById("temperatureLabel");
let weather = document.getElementById("temperature");
let city_field = document.getElementById("cityName");
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let todate = document.getElementById('current_time');
let weather_min = document.getElementById("temperatureMin");
let weather_max = document.getElementById("temperatureMax");
let searchButton = document.getElementById('search_button');
let searchInput = document.getElementById('search_city');

let date = new Date();
todate.innerHTML = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();

let requestBase = 'https://api.openweathermap.org/data/2.5/weather?q={city}&lang=ru&units=metric&appid=20d168cec6dd572a4b246df42e4646e7';
let request = new XMLHttpRequest();

function getUserText(data) {
    wind.innerHTML =  data['wind']['deg'] + 'm/c';
    humidity.innerHTML = data['main']['humidity'];
    pressure.innerHTML = data['main']['pressure'];
    weather_min.innerHTML = 'min:' + data['main']['temp_min'] + '°С';
    weather_max.innerHTML =  'max:' + data['main']['temp_max'] + '°С';
    weather.innerHTML =   data['main']['temp'] + '°С';
    weather_field.innerHTML = weather_data['weather'][0]['description'];
}

function getCityWeather(city) {
    city_field.innerText = city;
    let req = weather_data;
    weather_field.innerHTML = loading;
    
    let prom = new Promise((resolve, reject) => {
       requestURL = requestBase.replace('{city}', city);
        console.log("request: " + requestURL);

        request.open("GET", requestURL);
        request.responseType = 'json';
        request.onload = () => {
            console.log("response code: " + request.response.cod);
            if (request.response.cod === 200)
                return resolve(request.response);
            return reject(request.response);
        }
        request.send();
      });

    prom.then(
        (x) => {      
            weather_data = x;
            getUserText(weather_data);
        },
        (x) => {
            console.log("promise failed");
            alert(x.message);
            weather_data = req;
        }
    );
}

searchButton.addEventListener('click', () => {
    let inputValue = searchInput.value;
    city_field.innerText = inputValue;
    init_city = inputValue;

    console.log("search: " + inputValue);
    if (inputValue === "")
         return;
    getCityWeather(inputValue);
    console.log("end click");
});

getCityWeather(init_city);
console.log("end");