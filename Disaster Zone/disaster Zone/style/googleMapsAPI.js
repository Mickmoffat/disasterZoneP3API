/**** GOOGLE MAPS API Disaster Zone MDDN201 P3 [2015] (300317288) ****/

/*** CUSTOM SETTINGS ***/

function initMap() {
    /****** DISASTER ZONE VARABLES POS ******/

    /**** TAUMARUNI EARTH QUAKE NZ ****/
    var taumarunui = new google.maps.LatLng(-38.8833, 175.2617);

    /*** PERTH BUSH FIRE AUS ***/
    var perth = new google.maps.LatLng(-31.9522, 115.8589);

    /** CHIANG RAI FLOOD THAILAND **/
    var chiangRai = new google.maps.LatLng(19.9094, 99.8275); //pos

    /* ILLINOIS TORNADO USA */
    var illinois = new google.maps.LatLng(40.0000, -89.0000); //pos

    /*HURRICANE BRAZIL*/
    var brazil = new google.maps.LatLng(-15.4700, -47.5500); //pos


    var map = new google.maps.Map(document.getElementById('googleAPI'), {
        zoom: 4,
        center: { lat: -25.363882, lng: 131.044922 } //starting locaiton of google maps
    });


    /**+CUSTOM ICONS SVG +**/
   


    /*++++_ DISASTER WEIGHPOINTS _++++*/

    /*++++ TAUMARUNI ++++*/
    var marker = new google.maps.Marker({
        position: taumarunui, //position of weighpoint
        map: map
    });

    /*+++ PERTH +++*/
    var marker = new google.maps.Marker({
        position: perth, //position of weighpoint
        map: map
    });

    /*++ CHIANG RAI ++*/
    var marker = new google.maps.Marker({
        position: chiangRai, //position of weighpoint
        map: map
    });

    /*+ ILLIONIS +*/
    var marker = new google.maps.Marker({
        position: illinois,//position of weighpoint
        map:map
    });

    /* BRAZIL */
    var marker = new google.maps.Marker({
        position: brazil,//position of weighpoint
        map: map
    });
}
    

