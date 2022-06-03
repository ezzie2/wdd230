const temp = 45;
const speed = 2;

document.getElementById('windspeed').innerHTML = speed;
document.getElementById('temperature').innerHTML = temp;


if (temp <= 50 && speed <= 5) {
    const f = Math.round(35.74+(0.6215*temp)-35.75*(Math.pow(speed, 0.16))+0.4275*temp*(Math.pow(speed, 0.16))); 
    document.getElementById('windchill').innerHTML = f;
}
else {
    const f = "N/A";
    document.getElementById('windchill').innerHTML = f;
}