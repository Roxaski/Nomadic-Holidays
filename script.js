let cloudLeft = document.getElementById('cloud-left');
let cloudRight = document.getElementById('cloud-right');
let sun = document.getElementById('sun');
let parallaxSlow = document.getElementById('parallax-slow');

//PARALLAX SCROLLING
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    cloudLeft.style.marginTop = value - .1 + 'px',
    cloudRight.style.marginTop = value - .1 + 'px',
    sun.style.marginTop = value - .1 + 'px',
    parallaxSlow.style.backgroundPositionY = value * .25 + 'px';
});