'use strict';
(function () {

    window.initMap = function () {

        var gdansk = {
            lat: 54.348116,
            lng: 18.504140
        };

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: gdansk
        });

        var marker = new google.maps.Marker({
            position: gdansk,
            map: map
        });
    }
})();