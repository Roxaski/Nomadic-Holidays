let sun = document.getElementById('sun');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let title = document.getElementById('header');
let parallaxSlow = document.getElementById('parallax-slow');

//PARALLAX SCROLLING
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    sun.style.marginTop = value - .1 + 'px',
    treeLeft.style.right = value - .1 + 'px',
    treeRight.style.left = value - .1 + 'px',
    title.style.marginBottom = value - .1 + 'px',
    parallaxSlow.style.backgroundPositionY = value * .27 + 'px';
});