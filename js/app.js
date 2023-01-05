let background = document.querySelector('.link-background')
let links = document.querySelectorAll('.menu-items a');

const clickHandler = (el) => {
    links.forEach(link => {
        link.classList.remove('active');
    })
    el.classList.add('active');
}

links.forEach((link,index) => {
    link.addEventListener('click',(e) => {
        e.preventDefault();
        background.style.left = `${25 * (index)}%`;
        clickHandler(e.currentTarget);
    });
});

const hamburgerMenu = document.querySelectorAll('.ham-burger-menu');
const mobileMenu = document.querySelector('.mobile-menu-items');

hamburgerMenu.forEach(button => button.addEventListener('click', toggle));

function toggle() {
    let btn = this;
    btn.classList.add('animation');
    btn.classList.toggle('active');
    let newElem = btn.cloneNode(true);
    btn.parentNode.replaceChild(newElem, btn);
    mobileMenu.classList.toggle("no-mobile-menu");
    newElem.addEventListener('click', toggle);
}

const tl = gsap.timeline();

tl.to('.banner-title', {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", 
    y: 0, 
    duration: 2,
    delay: 0.5
})

.to('.banner-title', {
    y: -110, 
        duration: 1.2
})

.to(".down-arrow", {
    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)", 
    y: -30, 
    duration: 1.2
}, "-=1.2");