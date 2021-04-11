console.log("Script start");
const empty_city = "City-17"
const init_city = "Москва"
const loading = "Загрузка..."

// данные странички
let city_field;         // поле для указания города
let weather_field;      // поле с текущей погодой
let weather_data;       // массив данных от сервера
let weather_pict_field; // поле с картинкой
let weather_text_field; // поле с текстом данных о погоде
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");

// сеть
let requestBase = 'https://api.openweathermap.org/data/2.5/weather?q={city}&lang=ru&units=metric&appid=20d168cec6dd572a4b246df42e4646e7';
let request = new XMLHttpRequest();

function getUserText(data) {
    wind.innerHTML =  data['wind']['deg'] + 'm/c';
    humidity.innerHTML = data['main']['humidity'];
    pressure.innerHTML = data['main']['pressure'];
    let text;
    text = '<span">{temp}°С</span>\
    <span>Feels {feels_like}°С</span>\
    <div>min: {temp_min}°С / max: {temp_max}°С</div>\
    </br>'
    .replace("{temp}", data['main']['temp'])
    .replace("{feels_like}", data['main']['feels_like'])
    .replace("{temp_min}", data['main']['temp_min'])
    .replace("{temp_max}", data['main']['temp_max'])
    return text;
}

function getCityWeather(city) {
    city_field = document.getElementById("cityName");
    console.log("current city: "+ city_field.innerText + " | trying to set " + city);
    
    let prev_req = weather_data;

    weather_field = document.getElementById("temperature");
    weather_field.innerHTML = loading;
    //weather_pict_field = document.getElementById("weather_pict");
    //weather_pict_field.innerHTML = '<img src="img/loading.png"></img>';
    weather_text_field = document.getElementById("temperatureLabel");
    
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
            console.log("promise successed");

            weather_data = x;
            console.log("got weather data | weather_main: " + weather_data['weather'][0]['main']);
            console.log("got weather data | weather_description: " + weather_data['weather'][0]['description']);
            console.log("got weather data | weather_icon: " + weather_data['weather'][0]['icon']);
            console.log("got weather data | name: " + weather_data['name']);

            weather_field.innerHTML = weather_data['weather'][0]['description'];
            // weather_pict_field.innerHTML = '<img src="img/{icon}.png">'.replace("{icon}",  weather_data['weather'][0]["icon"]);
            weather_text_field.innerHTML = getUserText(weather_data);
            city_field.innerHTML = weather_data['name'];
        },
        (x) => {
            console.log("promise failed");
            alert(x.message);
            weather_data = prev_req;
            // восстанавливаем данные, на месте которых сейчас "загрузка"
            weather_field.innerHTML = weather_data['weather'][0]['description']; 
            // weather_pict_field.innerHTML = '<img src="img/{icon}.png">'.replace("{icon}",  weather_data['weather'][0]["icon"]);
        }
    );
}

// кнопка поиска города
const searchButton = document.getElementById('search_button');
const searchInput = document.getElementById('search_city');
searchButton.addEventListener('click', () => {
    const inputValue = searchInput.value;
    console.log("search: " + inputValue);
    if (inputValue === "")
        return;
    getCityWeather(inputValue);
});

getCityWeather(init_city);
console.log("Script end");














// let input_city = document.getElementById('search_city');
// let city = document.getElementById('city_name');
// let search_button = document.getElementById('search_button');

// console.log(input_city);
// city.innerHTML = input_city.value;

// // let wh_val = document.getElementById('wh_val');
// // let wh_ico = document.getElementById('weather_ico');
// // let mon_val = document.getElementById('mon_val');
// // let mid_val = document.getElementById('mid_val');
// // let weather;
// // let base = document.getElementById('base');
// // let er = document.getElementById('er');

// let date = new Date();
// let d = date.getDate();
// let m = date.getMonth();
// let y = date.getFullYear();

// let todate = document.getElementById('current_time');
// todate.innerHTML = d + '.' + m + '.' + y;

// console.log("search begin");
// search_button.addEventListener('click', () => {
//   console.log("click begin");
//     let promise = fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input_city.value + '&units=metric&lang=ru&appid=20d168cec6dd572a4b246df42e4646e7')
//         .then(response => {
//             if (!response.ok) {
//                 console.log("error");
//                 return response.json()
//                 // er.style.display = 'block';
//                 // base.style.display = 'none';
//             } else {
//                 res.json().then(data => {
//                 //         // base.style.display = 'flex';
//                 //         // er.style.display = 'none';
//                         city.innerHTML = data.name;
//                 //         // console.log(data);
//                 //         // if (data.main.temp > 0) data.main.temp = '+' + data.main.temp;
//                 //         // if (data.main.temp_max > 0) data.main.temp_max = '+' + data.main.temp_max;
//                 //         // if (data.main.temp_min > 0) data.main.temp_min = '+' + data.main.temp_min;
//                 //         // wh_val.innerHTML = data.main.temp;
//                 //         // wh_ico.src = './img/animated/' + data.weather[0].icon + '.svg';
//                 //         // mon_val.innerHTML = data.main.temp_max;
//                 //         // mid_val.innerHTML = data.main.temp_min;
//                 //         // console.log(wh_ico.src);
//                 })
//                 .catch(err => console.error(err));
//             }

//         })
//         // .catch(console.error);
//         promise.then(data=>console.log(data)).catch(err=>console.log(err));
//         console.log(promise);
// });


// console.log("script end");



/*async function getData(url) {
    return fetch(url)
      .then((data) => data.json())
      .then((data) => data);
}

const init_city = "Moscow";

let city = init_city;
let city_field;
let weather_data;

let requestBase = 'https://api.openweathermap.org/data/2.5/weather?q={city}&appid=20d168cec6dd572a4b246df42e4646e7';
let request = new XMLHttpRequest();

function getWeatherForeСast() {
    requestURL = requestBase.replace('{city}', city);

    request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        weather_data = request.response;
        console.log("got weather data | weather in " + city + "  is: " + weather_data['weather'][0]['main']);
    }

    getCity(weather_data);
}

function getCity(weather_container) {
    city_field = document.getElementById("city_name");
    //let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    // let request = new XMLHttpRequest();
    // request.open('GET', requestURL);
    // request.responseType = 'json';
    // request.send();

    // request.onload = function() {
    //     weather_data = request.response;
    //     console.log(weather_data);
    // }

    city = weather_container.name;
    city_field.innerHTML = city;
}

document.getElementById("search_button").addEventListener("click", () => {
    city = document.getElementById("search_city").value;
  
    getData(weather_url)
      .then((data) => {
        FillWeather(data);
      })
      .catch((err) => {
        ShowErr(err);
        return;
      });
    getData(forecast_url).then((data) => {
      FillForecast(data);
    });
});

setTimeout(getCity(), 3000);
getWeatherForeСast();*/