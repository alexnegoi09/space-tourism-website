import {navActive} from './main.js';

navActive(2);

const picture = document.querySelector('.picture');
const rank = document.querySelector('.rank');
const person = document.querySelector('.name');
const about = document.querySelector('.about');


function displayData(tab) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', '../data.json', true);
    
    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText);
        picture.src = data.crew[tab].images.png;
        rank.textContent = data.crew[tab].role;
        about.textContent = data.crew[tab].bio;
        person.textContent = data.crew[tab].name;
    }

    xhr.send();
}


window.addEventListener('load', function() {
    displayData(0);

    const firstTab = document.querySelector('.tabs span:first-child');
    firstTab.classList.add('active');
})


const tabs = document.querySelectorAll('.tabs span');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', function(e) {
        displayData(index);

        const tabArray = Array.from(this.parentElement.children);

        tabArray.forEach((elem) => {
            elem.classList.remove('active');
        })

        e.currentTarget.classList.add('active');
    });
})