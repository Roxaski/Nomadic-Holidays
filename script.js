let text = document.getElementById('text');
let clouds = document.getElementById('clouds');
let parallaxSlow = document.getElementById('parallax-slow');

//OARALLAX SCROLLING
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginBottom = value - 2.5 + 'px';
    clouds.style.marginTop = value - 2.5 + 'px';
    parallaxSlow.style.backgroundPositionY = value * 0.11 + 'px';
});