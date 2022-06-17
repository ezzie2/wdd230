const requestURL =  'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temp check for valid response and data parsing
        const prophets = jsonObject['prophets'];
        prophets.forEach(showProphets);
    });

function showProphets(prophet) {

    let section = document.createElement('section');
    let pName = document.createElement('h2');
    let place = document.createElement('p');
    let pBirth = document.createElement('p');
    let pDeath = document.createElement('p');
    let img = document.createElement('img');

    pName.innerHTML = `${prophet.name} ${prophet.lastname}`;
    place.innerHTML = `Birthplace: ${prophet.birthplace}`;
    pBirth.innerHTML = `Birth: ${prophet.birthdate}`;
    pDeath.innerHTML = `Death: ${prophet.death}`;
    img.setAttribute('src', `${prophet.imageurl}`);
    img.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`);
    img.setAttribute('loading', 'lazy');


    section.append(pName);
    section.appendChild(place);
    section.appendChild(pBirth);
    section.appendChild(pDeath);
    section.appendChild(img);

    document.querySelector('div.cards').appendChild(section);
};