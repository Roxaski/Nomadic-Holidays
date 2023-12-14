let parallaxSlow = document.getElementById('parallax-slow');

//PARALLAX SCROLLING
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    parallaxSlow.style.backgroundPositionY = value * .25 + 'px';
});