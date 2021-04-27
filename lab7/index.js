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
let image = document.getElementById('weather_container');

let date = new Date();
todate.innerHTML = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();

let request_init = 'https://api.openweathermap.org/data/2.5/weather?q={city}&lang=ru&units=metric&appid=20d168cec6dd572a4b246df42e4646e7';

function ChangeWeatherBack(str) {
    switch(str.slice(0,2)){
        case "01":
            image.style.backgroundImage = "url('./img/clearly.jpeg')";
            break;
        case "02":
            image.style.backgroundImage = "url('./img/clearly.jpeg')";
            // document.getElementById("WeatherToday").style.backgroundImage = "url('imge/few-clouds-sky.jpg')";
            break;
        case "03":
            image.style.backgroundImage = "url('./img/clearly.jpeg')";
            // document.getElementById("WeatherToday").style.backgroundImage = "url('imge/clod.jpg')";
            break;
        case "04":
            image.style.backgroundImage = "url('./img/pasmurno.jpg')";
            // document.getElementById("WeatherToday").style.backgroundImage = "url('imge/more_cloud.jpg')";
            break;
        case "09":
            image.style.backgroundImage = "url('./img/clearly.jpeg')";
            // document.getElementById("WeatherToday").style.backgroundImage = "url('imge/more_rain.jpg')";
            break;
        case "10":
            image.style.backgroundImage = "url('./img/clearly.jpeg')";
            // document.getElementById("WeatherToday").style.backgroundImage = "url('imge/rain.jpg')";
            break;
        case "11":
            image.style.backgroundImage = "url('./img/clearly.jpeg')";
            // document.getElementById("WeatherToday").style.backgroundImage = "url('imge/thunder.jpg')";
            break;
        case "13":
            image.style.backgroundImage = "url('./img/clearly.jpeg')";
            // document.getElementById("WeatherToday").style.backgroundImage = "url('imge/snow.jpg')";
            break;      
        case "50":
            image.style.backgroundImage = "url('./img/clearly.jpeg')";
            // document.getElementById("WeatherToday").style.backgroundImage = "url('imge/mist.jpg')";
            break;
    }
}

function addWeatherData(data) {
    console.log(data);
    wind.innerHTML =  data['wind']['speed'] + ' m/c';
    humidity.innerHTML = data['main']['humidity'] + " %";
    pressure.innerHTML = data['main']['pressure'] + " мм рт. сст.";
    weather_min.innerHTML = 'min:' + data['main']['temp_min'] + '°С';
    weather_max.innerHTML =  'max:' + data['main']['temp_max'] + '°С';
    weather.innerHTML =   data['main']['temp'] + '°С';
    weather_field.innerHTML = data['weather'][0]['description'];
    let str = data['weather'][0]['icon'];
    console.log(str);
    ChangeWeatherBack(str);
}


function getCityWeather(city) {
    city_field.innerText = city;
    
    let prom = new Promise((resolve, reject) => {
        requestURL = request_init.replace('{city}', city);

        let request = new XMLHttpRequest();
        request.open("GET", requestURL);
        request.responseType = 'json';
        request.onload = () => {
            if (request.response.cod === 200)
                return resolve(request.response);
            return reject(request.response);
        }
        request.send();
      });

    prom.then(
        (data) => {      
            addWeatherData(data);
        },
        (data) => {
            console.log("request error");
            alert(data.message);
        }
    );
}

let init_city = "Москва";
getCityWeather(init_city);
searchButton.addEventListener('click', () => {
    let init_city = searchInput.value;
    getCityWeather(init_city);
});