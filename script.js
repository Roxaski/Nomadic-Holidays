const hero = document.getElementById('hero');
const bookNow = document.getElementById('book-now');

// flag to prevent multiple requestAnimationFrames from stacking up
let animationScheduled = false;

// function that does the actual parallax animation
function parallaxAnimation() {
    // contains the current scroll position
    const scroll = window.scrollY;
    
    // slowly animates the hero parallax element when scrolling
    hero.style.transform = `translateY(${scroll * 0.1}px)`;
    
    // more quickly animates the book now banner when scrolling
    bookNow.style.backgroundPositionY = scroll * 0.27 + 'px';
    
    // when the function runs, it resets this flag ready for the next animation
    animationScheduled = false;
};

window.addEventListener('scroll', () => {
    // only run if we haven't already scheduled an animation
    if (!animationScheduled) {
        // schedule the animation for the next frame
        requestAnimationFrame(parallaxAnimation);
        
        // this flag triggers when an animation is scheduled to run and prevents more requestAnimationFrame calls until the animation runs
        animationScheduled = true;
    };
});