let sun = document.getElementById('sun');
let parallaxSlow = document.getElementById('parallax-slow');

//PARALLAX SCROLLING
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    sun.style.marginTop = value - .1 + 'px',
    parallaxSlow.style.backgroundPositionY = value * .27 + 'px';
});