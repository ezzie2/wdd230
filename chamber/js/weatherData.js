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
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        } 
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {

    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;

    const imgSource = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const weatherDesc = weatherData.weather[0].description;

    weatherIcon.setAttribute("src", imgSource);
    weatherIcon.setAttribute("alt", weatherDesc);
    captionDesc.textContent = weatherDesc.toUpperCase();


if (currentTemp <= 50 && windSpeed <= 5) {
    const f = Math.round(35.74+(0.6215*currentTemp)-35.75*(Math.pow(windSpeed, 0.16))+0.4275*currentTemp*(Math.pow(windSpeed, 0.16))); 
    document.getElementById('windchill').innerHTML = f;
}
else {
    const f = "N/A";
    document.getElementById('windchill').innerHTML = f;
}
}

