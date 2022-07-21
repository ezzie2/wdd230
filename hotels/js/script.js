// toggle Menu //

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle('open');
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;



// Date //
const y = {year: 'numeric'}
document.getElementById('year').textContent = new Date().toLocaleDateString('en-US', y);

const options = {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
document.getElementById('currenttime').textContent = new Date().toLocaleDateString('en-US',options);

const date = {weekday: "long", day: 'numeric', month: "long", year: "numeric"};
document.getElementById('date').textContent = new Date().toLocaleDateString('en-US', date);