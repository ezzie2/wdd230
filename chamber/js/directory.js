const URL = 'https://ezzie2.github.io/wdd230/chamber/json/data.json'
const lists = document.querySelector('.businesses');

async function getBusinesses(URL) { 
    const response = await fetch(URL);
    if (response.ok) {
        const info = await response.json();
        makeList(info);
    }

}

async function makeList(info) {
    b = info['businesses'];
    b.forEach(showPlaces);
}

getBusinesses(URL);

function showPlaces(places) {

    let section = document.createElement('section');
    let name = document.createElement('h2');
    let address= document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let member = document.createElement('p');
    let img = document.createElement('img');

    name.innerHTML = `${places.name}`;
    address.innerHTML = `${places.address}`;
    phone.innerHTML = `${places.phone}`;
    website.innerHTML = `${places.website}`;
    member.innerHTML = `${places.membership}`
    img.setAttribute('src', `${places.image}`);
    img.setAttribute('alt', `${places.name}`);
    img.setAttribute('loading', 'lazy');


    section.append(name);
    section.appendChild(img);
    section.appendChild(address);
    section.appendChild(phone);
    section.appendChild(website);
    section.appendChild(member);
    

    document.querySelector('div.businesses').appendChild(section);
};


