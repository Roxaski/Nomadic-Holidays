let test = document.getElementById('test');
let parallaxSlow = document.getElementById('parallax-slow');

//PARALLAX SCROLLING
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    test.style.marginTop = value - .1 + 'px',
    parallaxSlow.style.backgroundPositionY = value * .25 + 'px';
});