/**** GOOGLE MAPS API Disaster Zone MDDN201 P3 [2015] (300317288) ****/

/*** CUSTOM SETTINGS ***/
var map;


/** CUSTOM UI ELEMENTS  START **/
function CenterControl(controlDiv, map) {

    //MAIN CUSTOM UI CONTAINER
    var controlUI = document.createElement('div'); //creates div element
    controlUI.style.backgroundColor = '#183152'; //sets background color
    controlUI.style.backgroundColor = 'rgba(24,49,82,0.95)';

    /* BORDER*/
    /*L*/
    controlUI.style.borderTopLeftRadius = '0.6em';
    controlUI.style.borderBottomLeftRadius = '0.2em';
    /*R*/
    controlUI.style.borderTopRightRadius = '20px';
    controlUI.style.borderTopRightRadius = '0.6em';
    controlUI.style.borderBottomRightRadius = '0.2em';

    controlUI.style.padding = '2%';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)'; //sets shadow
    controlUI.style.cursor = 'pointer'; //sets custom pointers
   
    controlUI.style.textAlign = 'left'; //sets text alignment
    controlUI.style.width = '20vw'; //sets width [NEEDS FIXING]
    
    //MARGIN
    controlUI.style.marginRight = '2%';
    controlUI.style.marginBottom = '2%'; //sets margin
    controlDiv.appendChild(controlUI);

    /*++ CUSTOM UI KEY ++*/
    // Set CSS for the control interior.
    var keyTitleText = document.createElement('div'); //creates div element
    keyTitleText.style.color = 'rgb(25,25,25)'; //sets text color
    keyTitleText.style.backgroundColor = '#2e81ef'; //sets background color
    keyTitleText.style.fontFamily = 'lato'; //sets font family
    keyTitleText.style.fontSize = '16px'; //sets font size
    keyTitleText.style.lineHeight = '38px'; //sets line height
    keyTitleText.style.paddingLeft = '5px'; //sets L padding
    keyTitleText.style.paddingRight = '5px'; //sets R padding

    keyTitleText.innerHTML = '<h4>Key</h4>'; //sets text
    controlUI.appendChild(keyTitleText);

    /*++ CUSTOM UI KEY CONTENT ALERT LEVEL ++*/
    var alertLevelText = document.createElement('div'); //creates div element
    alertLevelText.style.color = 'rgb(25,25,25)'; //sets text color
    alertLevelText.style.backgroundColor = '#C4D7ED'; //sets background color
    alertLevelText.style.fontFamily = 'lato'; //sets font family
    alertLevelText.style.fontSize = '16px'; //sets font size
    alertLevelText.style.lineHeight = '38px'; //sets line height
    alertLevelText.style.paddingLeft = '5px'; //sets L padding
    alertLevelText.style.paddingRight = '5px'; //sets R padding

    alertLevelText.style.width = '100%';
    alertLevelText.style.overflow = 'hidden';
    alertLevelText.style.display = 'inline-block';
    alertLevelText.innerHTML = '<table><tr><td><h5>Severe</h5></td><td><img class="imgKeyColor" id="imgColorSize" src="./media/img/mapKeys/dangerLevels/severe.jpg"></td><td>&nbsp;</td><td><h5>Earthquake</h5></td><td><img class="imgKeyDisasterCode" id="imgDisasterEvent" src="./media/img/mapKeys/key/earthquake.png"></td></tr><tr><td><h5>Strong</h5></td><td><img class="imgKeyColor" id="imgColorSize" src="./media/img/mapKeys/dangerLevels/strong.jpg"></td><td>&nbsp;</td><td><h5>Flood</h5></td><td><img class="imgKeyDisasterCode" id="imgDisasterEvent" src="./media/img/mapKeys/key/flood.png"></td></tr><tr><td><h5>Moderate</h5></td><td><img class="imgKeyColor" id="imgColorSize" src="./media/img/mapKeys/dangerLevels/moderate.jpg"></td><td>&nbsp;</td><td><h5>Hurricane</h5></td><td><img class="imgKeyDisasterCode" id="imgDisasterEvent" src="./media/img/mapKeys/key/hurricane.png"></td></tr><tr><td><h5>Light</h5></td><td><img class="imgKeyColor" id="imgColorSize" src="./media/img/mapKeys/dangerLevels/light.jpg"></td><td>&nbsp;</td><td><h5>Tornado</h5></td><td><img class="imgKeyDisasterCode" id="imgDisasterEvent" src="./media/img/mapKeys/key/tornado.png"></td></tr><tr><td><h5>Weak</h5></td><td><img class="imgKeyColor" id="imgDisasterEvent" src="./media/img/mapKeys/dangerLevels/weak.jpg"></td><td>&nbsp;</td><td><h5>Fire</h5></td><td><img class="imgKeyDisasterCode" id="imgDisasterEvent" src="./media/img/mapKeys/key/fire.png"></td></tr></table>';//sets text
    controlUI.appendChild(alertLevelText);



}

/*** INITAL MAP ***/

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

    /* SET MAP OPTIONS */
    var map = new google.maps.Map(document.getElementById('googleAPI'), {

        //MAP OPTIONS
        zoom: 4, //sets zoom level
        draggable: true, //disable drag
        zoomControl: true, //disable or enable zoom
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        disableDoubleClickZoom: true, //disables zoom
        scrollwheel: false, //disables scroll wheel
        disableDefaultUI: true, //disables UI
        mapTypeId: google.maps.MapTypeId.TERRAIN, //sets terrain view
        
        center: { lat: -25.363882, lng: 131.044922 } //starting NZ
    });

    /* GEOLOCATION */


    /*++ CUSTOM UI START ++*/
  // Create the DIV to hold the control and call the CenterControl() constructor
  // passing in this DIV.
  var centerControlDiv = document.createElement('div'); //creates new element 
  var centerControl = new CenterControl(centerControlDiv, map);

  centerControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(centerControlDiv);
    /*++ CUSTOM UI END ++*/




    /**+CUSTOM ICONS SVG +**/
   


    /*++++_ DISASTER WEIGHPOINTS _++++*/

    /*++++ TAUMARUNI ++++*/
    var marker = new google.maps.Marker({
        position: taumarunui, //position of weighpoint       
        icon: './media/img/mapKeys/event/light/earthquakeL.png',
        map: map
        
    });

    /*+++ PERTH +++*/
    var marker = new google.maps.Marker({
        position: perth, //position of weighpoint
        icon: './media/img/mapKeys/event/severe/fireS.png',
        map: map
    });

    /*++ CHIANG RAI ++*/
    var marker = new google.maps.Marker({
        position: chiangRai, //position of weighpoint
        icon: './media/img/mapKeys/event/strong/floodST.png',
        map: map
    });

    /*+ ILLIONIS +*/
    var marker = new google.maps.Marker({
        position: illinois,//position of weighpoint
        icon: './media/img/mapKeys/event/moderate/tornadoM.png',
        map:map
    });

    /* BRAZIL */
    var marker = new google.maps.Marker({
        position: brazil,//position of weighpoint
        icon: './media/img/mapKeys/event/weak/hurricaneW.png',
        map: map
    });
}


    

