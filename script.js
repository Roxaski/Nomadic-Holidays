let text = document.getElementById('text');
let clouds = document.getElementById('clouds');

//Hero Parallax
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginBottom = value - 2.5 + 'px';
    clouds.style.marginTop = value - 2.5 + 'px';
});