import {navActive} from './main.js';

navActive(1);

const picture = document.querySelector('.picture');
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const distancePara = document.querySelector('.distance-para2');
const timePara = document.querySelector('.time-para2');
const info = document.querySelector('.info');


function displayData(tab) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', '../data.json', true);
    
    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText);
        picture.src = data.destinations[tab].images.png;
        title.textContent = data.destinations[tab].name;
        description.textContent = data.destinations[tab].description;
        distancePara.textContent = data.destinations[tab].distance;
        timePara.textContent = data.destinations[tab].travel;
    }

    xhr.send();
}


// display data on page load
window.addEventListener('load', function() {
    displayData(0);

    const firstLink = document.querySelector('.nav-second-item:first-child');
    firstLink.classList.add('active');
})


//display data for each tab
const links = document.querySelectorAll('.nav-second-item');

links.forEach((link, index) => {
    link.addEventListener('click', function(e) {
        displayData(index);

        //change color of link, when clicked
        const linkArray = Array.from(this.parentElement.children);

        linkArray.forEach((elem) => {
            elem.classList.remove('active');
        })

        e.currentTarget.classList.add('active');
    });
})