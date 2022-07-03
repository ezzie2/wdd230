const currentTemp = document.querySelector("#temperature");
const windChill = document.querySelector("#windchill");
const windSpeed = document.querySelector("#windspeed");
const weatherIcon = document.querySelector("#currentIcon");
const captionDesc = document.querySelector("#weatherDesc");

const URL = "https://api.openweathermap.org/data/2.5/weather?lat=40.980&lon=-111.887&appid=482f2d2c5c406e7e0998abe656e157e5&units=imperial";

async function apiFetch() {
    try {
        const response = await fetch(URL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        } 
    } catch (error) {
        console.log(error);
    }
}


function displayResults(weatherData) {

    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;

    const imgSource = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const weatherDesc = weatherData.weather[0].description;

    weatherIcon.setAttribute("src", imgSource);
    weatherIcon.setAttribute("alt", weatherDesc);
    captionDesc.textContent = weatherDesc.toUpperCase();


    let temperature = weatherData.main.temp;
    let windspeed = weatherData.wind.speed;
    let windchill = '';

    if (temperature <= 50 && windspeed <= 3) {
        windspeed = `${windChill(temperature, windspeed)}&#176;F`;
    }
    else {
        windchill = 'N/A';
    }


    document.getElementById("windspeed").innerHTML = windspeed.toFixed();
    document.getElementById("windchill").innerHTML = windchill;

    function windChill(temp, speed) {
        return Math.round(35.74+(0.6215*temp)-35.75*(Math.pow(speed, 0.16))+0.4275*temp*(Math.pow(speed, 0.16))); 
    }
}



apiFetch(URL);