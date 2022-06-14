const y = {year: 'numeric'}
document.getElementById('year').textContent = new Date().toLocaleDateString('en-US', y);

const options = {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
document.getElementById('currenttime').textContent = new Date().toLocaleDateString('en-US',options);

const date = {weekday: "long", day: 'numeric', month: "long", year: "numeric"};
document.getElementById('date').textContent = new Date().toLocaleDateString('en-US', date);

//locale storage and visits script

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visit-ls"));
let todayDisplay = Number(window.localStorage.getItem("todayDisplay"));

const timeBetween = Math.round((Date.now() - todayDisplay) / (1000 * 60 * 6 * 24));

if (numVisits !== 0) {
	visitsDisplay.textContent = timeBetween;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

numVisits++;
localStorage.setItem("visit-ls", numVisits);
localStorage.setItem("todayDisplay", Date.now());
