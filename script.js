const hero = document.getElementById('hero');
const bookNow = document.getElementById('book-now');

// prevents requestAnimationFrames from stacking up
let animationScheduled = false;

// keeps track of whether each of the elements is in the viewport
let heroVisible = true;
let bookNowVisible = false;

// updates each variable when the element enters or exits the viewport
const heroObserver = new IntersectionObserver((e) => {
    heroVisible = e[0].isIntersecting
});
const bookNowObserver = new IntersectionObserver((e) => {
    bookNowVisible = e[0].isIntersecting
});

heroObserver.observe(hero);
bookNowObserver.observe(bookNow);

// applies parallax effect by making each element scroll at a fraction of the normal speed
function parallaxAnimation() {
    // prevents negative scroll values to help with chrome browser quirks
    const scroll = Math.max(0, window.scrollY);
    
    if (heroVisible) {
        hero.style.transform = `translateY(${scroll * 0.1}px)`;
    };

    if (bookNowVisible) {
        bookNow.style.backgroundPositionY = scroll * 0.27 + 'px';
    };

    animationScheduled = false;
};

// checks if an animation is scheduled, and updates it accordingly
window.addEventListener('scroll', () => {
    if (!animationScheduled) {
        requestAnimationFrame(parallaxAnimation);
        animationScheduled = true;
    };
});