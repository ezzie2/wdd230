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
    let phoneN = document.createElement('p');
    let website = document.createElement('p');
    let img = document.createElement('img');

    name.innerHTML = `${places.name}`;
    address.innerHTML = `Address: ${places.address}`;
    phoneN.innerHTML = `Phone Number: ${places.phoneN}`;
    website.innerHTML = `Website: ${places.website}`;
    img.setAttribute('src', `${places.imageurl}`);
    img.setAttribute('alt', `${places.name}`);
    img.setAttribute('loading', 'lazy');


    section.append(name);
    section.appendChild(img);
    section.appendChild(address);
    section.appendChild(phoneN);
    section.appendChild(website);
    

    document.querySelector('div.businesses').appendChild(section);
};


