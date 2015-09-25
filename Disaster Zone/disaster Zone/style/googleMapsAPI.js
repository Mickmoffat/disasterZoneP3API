/**** GOOGLE MAPS API Disaster Zone MDDN201 P3 [2015] (300317288) ****/

    /** CUSTOM GOOGLE API SETTINGS **/
    function initialize() {
        var mapCanvas = document.getElementById('googleAPI'); //id selector

        var marker = new google.maps.Marker({
            position: map.getCenter(),
           map: map
        });
        /* MAP OPTIONS */

        var mapOptions = {
            center: {lat:-42, lng:174}, //map location
            zoom: 3, //zoom level
            draggable: true, //disable drag
            zoomControl: true, //disable zoom
            disableDoubleClickZoom: true, //disables zoom
            scrollwheel: false, //disables scroll wheel
            disableDefaultUI: false, //disables UI
            mapTypeId: google.maps.MapTypeId.TERRAIN //sets terrain view

        }



    }




    google.maps.event.addDomListener(window, 'load', initialize);

    /* GOOGLE API KEY */
    

