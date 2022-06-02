//mobile dowpdown menu
const menuBtn = document.querySelector('.menu-icon');
const navlinks = document.querySelector('.navi-links');

menuBtn.addEventListener('click', () => {
    navlinks.classList.toggle('mobile-dropdown');

});

// add event listener forEach link navi-links. When clicked, remove class mobile-dropdown.
document.querySelectorAll('.navi-links a').forEach(link => {
    link.addEventListener('click', () => {
        navlinks.classList.remove('mobile-dropdown');
    })
});