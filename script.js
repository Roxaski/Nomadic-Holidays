let leftImg = document.getElementById('left-img');
let bookNow = document.getElementById('book-now');

//PARALLAX SCROLLING
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    leftImg.style.marginTop = value - .1 + 'px',
    bookNow.style.backgroundPositionY = value * .27 + 'px';
});