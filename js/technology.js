import {navActive} from './main.js';

navActive(3);

function displayData(tab) {
    
    let picturePortrait = document.querySelector('.picture-portrait');
    let pictureLandscape = document.querySelector('.picture-landscape');


    const title = document.querySelector('.title');
    const description = document.querySelector('.description');

    const xhr = new XMLHttpRequest();

    xhr.open('GET', '../data.json', true);
    
    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText);

        picturePortrait.src = data.technology[tab].images.portrait;
        pictureLandscape.src = data.technology[tab].images.landscape;

        title.textContent = data.technology[tab].name;
        description.textContent = data.technology[tab].description;
    }

    xhr.send();
}


window.addEventListener('load', function() {
    displayData(0);

    const firstTab = document.querySelector('.buttons span:first-child');
    firstTab.classList.add('active');
})


const buttons = document.querySelectorAll('.buttons span');

buttons.forEach((button, index) => {
    button.addEventListener('click', function(e) {
        displayData(index);

        const btnArray = Array.from(this.parentElement.children);

        btnArray.forEach((elem) => {
            elem.classList.remove('active');
        })

        e.currentTarget.classList.add('active');
    });
})