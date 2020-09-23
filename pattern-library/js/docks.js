window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let menuLinks = require('./parts/menuLinks'),
        toogleMenu = require('./parts/toggleMenu');

    menuLinks();
    toogleMenu();
})