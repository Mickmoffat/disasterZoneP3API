/**** GOOGLE MAPS API Disaster Zone MDDN201 P3 [2015] (300317288) ****/

/*** CUSTOM SETTINGS ***/
var map;
//LOAD FONT


/** CUSTOM UI ELEMENTS  START **/
function CenterControl(controlDiv, map) {

    //MAIN CUSTOM UI CONTAINER
    var controlUI = document.createElement('div'); //creates div element
    controlUI.style.backgroundColor = '#fff'; //sets background color
    controlUI.style.border = '2px solid #fff'; //sets border style
    controlUI.style.borderRadius = '3px'; //sets border radius
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)'; //sets shadow
    controlUI.style.cursor = 'pointer'; //sets custom pointers
    controlUI.style.marginBottom = '22px'; //sets margin
    controlUI.style.textAlign = 'left'; //sets text alignment
    controlUI.style.width = '400px'; //sets width
    controlUI.style.height = '400px'; //sets height
    controlUI.title = 'Click to recenter the map'; //hover text
    controlUI.style.marginRight = '2%';
    controlDiv.appendChild(controlUI);

    /*++ CUSTOM UI KEY ++*/
    // Set CSS for the control interior.
    var controlText = document.createElement('div'); //creates div element
    controlText.style.color = 'rgb(25,25,25)'; //sets text color
    controlText.style.backgroundColor = '#2e81ef'; //sets background color
    controlText.style.fontFamily = 'lato'; //sets font family
    controlText.style.fontSize = '16px'; //sets font size
    controlText.style.lineHeight = '38px'; //sets line height
    controlText.style.paddingLeft = '5px'; //sets L padding
    controlText.style.paddingRight = '5px'; //sets R padding
    
    controlText.innerHTML = 'Key'; //sets text
    controlUI.appendChild(controlText);

    /*++ CUSTOM UI KEY CONTENT ALERT LEVEL ++*/
    var keyText = document.createElement('div'); //creates div element
    keyText.style.color = 'rgb(25,25,25)'; //sets text color
    keyText.style.backgroundColor = '#ff8746'; //sets background color
    keyText.style.fontFamily = 'lato'; //sets font family
    keyText.style.fontSize = '16px'; //sets font size
    keyText.style.lineHeight = '38px'; //sets line height
    keyText.style.paddingLeft = '5px'; //sets L padding
    keyText.style.paddingRight = '5px'; //sets R padding
    keyText.innerHTML = 'Severe Earthquake </br> Strong </br> Moderate </br> Light'; //sets text
    controlUI.appendChild(keyText);

    

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


    

