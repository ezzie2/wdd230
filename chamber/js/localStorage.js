
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
