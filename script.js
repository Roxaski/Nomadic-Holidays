const parallax = document.getElementById('parallax');
const bookNow = document.getElementById('book-now');

// 
window.addEventListener('scroll', () => {
    // stores the value of the current vertical scroll position
    let parallaxScroll = window.scrollY;

    /*
        multiplying the scroll position by a small number,
        makes the background image scroll slower than the page, creating a parallax effect
    */
    parallax.style.transform = `translateY(${parallaxScroll * .1}px)`;

    /*
        multiplying the scroll position by a larger number,
        makes the book-now div move faster than the the background, creating a parallax effect
    */
    bookNow.style.backgroundPositionY = parallaxScroll * .27 + 'px';
});