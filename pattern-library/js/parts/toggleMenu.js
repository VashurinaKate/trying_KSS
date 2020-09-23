function toggleMenu() {
    let button = document.getElementById('toggle-menu'),
        menu = document.getElementsByClassName('menu');

    button = addEventListener('click', function(event) {
    event.preventDefault();
    menu.classList.toggle('is-open');
    });
}
module.exports = toggleMenu;