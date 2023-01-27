let background = document.querySelector('.link-background')
let links = document.querySelectorAll('.menu-items a');

const clickHandler = (el) => {
    links.forEach(link => {
        link.classList.remove('active');
    })
    el.classList.add('active');
}

links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
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


gsap.registerPlugin(ScrollTrigger);

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

const scrollAnimation = (animationElement, scrollTarget, duration, delay, markers, polygon) => {
    gsap.to(animationElement, {
        scrollTrigger: {
            trigger: scrollTarget,
            markers: markers,
            start: "top 80%"
        },

        clipPath: polygon,
        duration: duration,
        delay: delay,
        ease: "power3.out"
    });
}

scrollAnimation('.brand-bg-image', '.brand-bg-image', 2, 0, true, "polygon(0 0, 100% 0, 100% 100%, 0% 100%)");
scrollAnimation(".brand-scroll-anim-1 .brand-title", ".brand-scroll-anim-1", 2, 0, true, "polygon(0 0, 100% 0, 100% 100%, 0% 100%)");
scrollAnimation(".brand-scroll-anim-1 .brand-description", ".brand-scroll-anim-1", 2, 1, true, "polygon(0 0, 100% 0, 100% 100%, 0% 100%)");
scrollAnimation(".brand-scroll-anim-1 .brand-cta", ".brand-scroll-anim-1", 2, 1.5, true, "polygon(0 0, 100% 0, 107% 100%, -7% 100%)");


scrollAnimation('.brand-bg-image-2', '.brand-bg-image-2', 2, 0, true, "polygon(0 0, 100% 0, 100% 100%, 0% 100%)");
scrollAnimation(".brand-scroll-anim-2 .brand-title", ".brand-scroll-anim-2", 2, 0, true, "polygon(0 0, 100% 0, 100% 100%, 0% 100%)");
scrollAnimation(".brand-scroll-anim-2 .brand-description", ".brand-scroll-anim-2", 2, 1, true, "polygon(0 0, 100% 0, 100% 100%, 0% 100%)");
scrollAnimation(".brand-scroll-anim-2 .brand-cta", ".brand-scroll-anim-2", 2, 1.5, true, "polygon(0 0, 100% 0, 107% 100%, -7% 100%)");


scrollAnimation('.brand-bg-image-3', '.brand-scroll-anim-3', 2, 0, true, "polygon(0 0, 100% 0, 100% 100%, 0% 100%)");
scrollAnimation(".brand-scroll-anim-3 .services-title", ".brand-scroll-anim-3", 2, 1, true, "polygon(0 0, 100% 0, 100% 100%, 0% 100%)");
scrollAnimation(".brand-scroll-anim-3 .graphic-description", ".brand-scroll-anim-3", 2, 2, true, "polygon(0 0, 100% 0, 100% 100%, 0% 100%)");


scrollAnimation('.brand-bg-image-4', '.brand-scroll-anim-4', 2, 0, true, "polygon(0 0, 100% 0, 100% 100%, 0% 100%)");
scrollAnimation(".brand-scroll-anim-4 .services-title", ".brand-scroll-anim-4", 2, 1, true, "polygon(0 0, 100% 0, 100% 100%, 0% 100%)");
scrollAnimation(".brand-scroll-anim-4 .photography-description", ".brand-scroll-anim-4", 2, 2, true, "polygon(0 0, 100% 0, 100% 100%, 0% 100%)");