const requestURL =  'https://ezzie2.github.io/wdd230/hotels/json/temples.json';
const cards = document.querySelector('.cards');


async function getTemple(requestURL) {
    const response = await fetch(requestURL);
    if (response.ok) {
        const info = await response.json();
        makeList(info);
    }
}


async function makeList(info) {
    b= info['templesList'];
    b.forEach(showTemples);

}

getTemple(requestURL);

function showTemples(temple) {
    let section = document.createElement('section');
    let name = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let history = document.createElement('p');
    let img = document.createElement('img');

    name.innerHTML = `${temple.name}`;
    address.innerHTML = `${temple.address}`;
    phone.innerHTML = `${temple.telephone}`;
    history.innerHTML = `${temple.history}`;
    
    img.setAttribute('src', `${temple.image}`);
    img.setAttribute('alt', `${temple.name}`);
    img.setAttribute('loading', 'lazy');

    section.append(name);
    section.appendChild(img);
    section.appendChild(address);
    section.appendChild(phone);
    section.appendChild(history);

    document.querySelector('div.cards').appendChild(section);
};