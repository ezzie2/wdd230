const currentTemp = document.querySelector("#current-temp");
// const windSpeed = document.querySelector("#wind");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#figcaption");

const URL = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=482f2d2c5c406e7e0998abe656e157e5&units=imperial";

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
    // windSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;

    const imgsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const weatherDesc = weatherData.weather[0].description;

    weatherIcon.setAttribute("src", imgsrc);
    weatherIcon.setAttribute("alt", weatherDesc);
    captionDesc.textContent = weatherDesc.toUpperCase();
}

