let cloudLeft = document.getElementById('cloud-left');
let cloudRight = document.getElementById('cloud-right');
let cloudLeftMobile = document.getElementById('cloud-left-mobile');
let cloudRightMobile = document.getElementById('cloud-right-mobile');
let sun = document.getElementById('sun');
let parallaxSlow = document.getElementById('parallax-slow');
let parallaxSlowMobile = document.getElementById('parallax-slow-mobile');

//PARALLAX SCROLLING
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    cloudLeft.style.marginTop = value - .1 + 'px',
    cloudRight.style.marginTop = value - .1 + 'px',
    cloudLeftMobile.style.marginTop = value - .1 + 'px',
    cloudRightMobile.style.marginTop = value - .1 + 'px',
    sun.style.marginTop = value - .1 + 'px',
    parallaxSlow.style.backgroundPositionY = value * .27 + 'px';
    parallaxSlowMobile.style.backgroundPositionY = value * .09 + 'px';
});