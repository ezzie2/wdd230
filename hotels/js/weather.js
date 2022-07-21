const currentTemp = document.querySelector("#currentTemp");
const humidity = document.querySelector("#humidity");

const captionDesc = document.querySelector("#weatherDesc");

const URL = "https://api.openweathermap.org/data/2.5/weather?lat=-18.142&lon=178.441&appid=482f2d2c5c406e7e0998abe656e157e5&units=imperial";

async function apiFetch(apiURL) {
    try {
        const response = await fetch(apiURL);
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
    humidity.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>`;
    

    const weatherDesc = weatherData.weather[0].description;


    captionDesc.textContent = weatherDesc.toUpperCase();



  
}



apiFetch(URL);