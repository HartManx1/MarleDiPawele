'use strict';

(function() {

    var modalLinks = document.querySelectorAll('.show-modal');
    var modals = document.querySelectorAll('.modal');

    var showModal = function(event) {
        event.preventDefault();

        for (var i = 0; i < modals.length; i++) {
            modals[i].classList.remove('show');
        };

        var attribute = this.getAttribute('href');
        var targetElement = document.querySelector(attribute); //modalHref
        targetElement.classList.add('show'); //modalHref
        document.querySelector('#modal-overlay').classList.add('show');

    };

    for (var i = 0; i < modalLinks.length; i++) {
        modalLinks[i].addEventListener('click', showModal);
    }

    var hideModal = function(event) {
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.remove('show');
    };

    var closeButtons = document.querySelectorAll('.modal .close');

    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', hideModal);
    }

    document.querySelector('#modal-overlay').addEventListener('click', hideModal);

    for (var i = 0; i < modals.length; i++) {
        modals[i].addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }

})();