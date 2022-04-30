const y = {year: 'numeric'}
document.getElementById('year').textContent = new Date().toLocaleDateString('en-US', y);

const options = {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
document.getElementById('currenttime').textContent = new Date().toLocaleDateString('en-US',options);
