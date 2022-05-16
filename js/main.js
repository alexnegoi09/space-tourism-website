// add 'active' class to the nav item that corresponds to the current page

export function navActive(itemIndex) {
    const navItems = Array.from(document.querySelectorAll('.nav-item'));
    navItems.forEach((item) => {
        item.classList.remove('active');
    })

    navItems[itemIndex].classList.add('nav-active');
}

//

const mainNav = document.querySelector('.navbar');
const menuBtn = document.querySelector('.icon-hamburger');
const closeBtn = document.querySelector('.icon-close');

window.addEventListener('load', responsive);
window.addEventListener('resize', responsive);

function responsive() {
    if (!window.matchMedia('(min-width: 700px)').matches) {

        mainNav.classList.remove('animation-off');
    
        menuBtn.addEventListener('click', toggleNav);
    
        function toggleNav() {
            mainNav.classList.add('nav-display');
        }
    
        closeBtn.addEventListener('click', closeNav);
    
    
        function closeNav() {
            mainNav.classList.remove('nav-display');
        }

    } else {
        mainNav.classList.add('animation-off');
    }
}