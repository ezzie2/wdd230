clickCounter();

function clickCounter() {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;

    } else {
        localStorage.clickcount = 1;
    }

    document.getElementById('heart1').innerHTML = localStorage.clickcount;
    document.getElementById('heart2').innerHTML = localStorage.clickcount;
    document.getElementById('heart3').innerHTML = localStorage.clickcount;
    document.getElementById('heart4').innerHTML = localStorage.clickcount;
    
}