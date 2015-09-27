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
    /** TEXT CONTENT **/

  /*_TAUMARUNI EARTHQUAKE_*/
  var taumarunuiContentText = '<div id ="content">' + '<div id="siteNotice">' +
    '</div>' +
    '<h3 id="" class="">Taumarunui Earthquake</h3>' + '<ul style="list-style-type:none;"><li>Danger Level: Light</li><li>3.5 Magnitude</li><li>Damage Reports: Light damage to houses and water piping</li></ul>' + '<h4>Donate</h4>' + '<p>Donate to Disaster Zone relief fund</p>' + '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" style =" width:4vw; height:auto;"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>' + '<h4>Volunteer</h4>' + '<p>In the area want to help out? <br> Contact Disaster Zone volunteer service (0800 3427 8372)</p>' +

    '</div>';

    /**_ PERTH _**/

  var perthContentText = '<div id ="content">' + '<div id="siteNotice">' +
    '</div>' +
    '<h3 id="" class="">Perth Bushfire</h3>' + '<ul style="list-style-type:none;"><li>Danger Level: Severe</li><li>Damage Reports: 80,000 hectares of forest burned <br> endangering the city of Perth.</li></ul>' + '<h4>Donate</h4>' + '<p>Donate to Disaster Zone relief fund</p>' + '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" style =" width:4vw; height:auto;"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>' + '<h4>Volunteer</h4>' + '<p>In the area want to help out? <br> Contact Disaster Zone volunteer service (0800 3427 8372)</p>' +

    '</div>';

    /***_ CHIANG RAI _***/
  var chiangRaiContentText = '<div id ="content">' + '<div id="siteNotice">' +
   '</div>' +
   '<h3 id="" class="">Chiang Rai Flood</h3>' + '<ul style="list-style-type:none;"><li>Danger Level: Strong</li><li>Damage Reports: 1,000 homes effected, farm lands flooded.</li></ul>' + '<h4>Donate</h4>' + '<p>Donate to Disaster Zone relief fund</p>' + '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" style =" width:4vw; height:auto;"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>' + '<h4>Volunteer</h4>' + '<p>In the area want to help out? <br> Contact Disaster Zone volunteer service (0800 3427 8372)</p>' +

   '</div>';

    /****_ ILLIONIS _****/
  var illionisContentText = '<div id ="content">' + '<div id="siteNotice">' +
'</div>' + '<h3 id="" class="">Illinois Tornado Warning</h3>' + '<ul style="list-style-type:none;"><li>Danger Level: Moderate</li><li>Damage Reports: None</li></ul>' +

  '</div>';

    /*****_ BRAZIL _*****/
  var brazilContentText = '<div id ="content">' + '<div id="siteNotice">' +
'</div>' + '<h3 id="" class="">Brazil  Hurricane Warning</h3>' + '<ul style="list-style-type:none;"><li>Danger Level: Weak</li><li>Damage Reports: None</li></ul>' +

  '</div>';

    /*__ VARABLES __*/

    /*_TAUMARUNI EARTHQUAKE_*/
  var taumarunuiInfoWindow = new google.maps.InfoWindow({
      content: taumarunuiContentText,
      
  }); 

    /**_ PERTH _**/
  var perthInfoWindow = new google.maps.InfoWindow({
      content: perthContentText,
  });

    /***_ CHIANG RAI _***/
  var chiangRaiInfoWindow = new google.maps.InfoWindow({
      content: chiangRaiContentText,
  });

    /****_ ILLIONIS _****/
  var illionisInfoWindow = new google.maps.InfoWindow({
      content: illionisContentText,
  });


    /*****_ BRAZIL _*****/
  var brazilInfoWindow = new google.maps.InfoWindow({
      content: brazilContentText,
  });

  
    /*++++ TAUMARUNI ++++*/
    var marker = new google.maps.Marker({
        position: taumarunui, //position of weighpoint
        icon: './media/img/mapKeys/event/light/earthquakeL.png',
        //animation:google.maps.Animation.BOUNCE,
        title: 'Taumarunui', //display on hover
        infowindow: taumarunuiInfoWindow, //info window variable
        map: map
    });

    /* CLICK DISPLAY INFOWINDOW */
    google.maps.event.addListener(marker, 'click', function () {
        this.infowindow.open(map, this);

    });
    //marker.addListener('click', toggleBounce);

    /*+++ PERTH +++*/
    var marker = new google.maps.Marker({
        position: perth, //position of weighpoint
        icon: './media/img/mapKeys/event/severe/fireS.png',
        title: 'Perth', //display on hover
        infowindow: perthInfoWindow, //info window variable
        map: map
    });

    /* CLICK DISPLAY INFOWINDOW */
    google.maps.event.addListener(marker, 'click', function () {
        this.infowindow.open(map, this);

    });

    /*++ CHIANG RAI ++*/
    var marker = new google.maps.Marker({
        position: chiangRai, //position of weighpoint
        icon: './media/img/mapKeys/event/strong/floodST.png',
        title: 'Chaiang Rai',
        infowindow: chiangRaiInfoWindow,
        map: map
    });

    /* CLICK DISPLAY INFOWINDOW */
    google.maps.event.addListener(marker, 'click', function () {
        this.infowindow.open(map, this);
    });

    /*+ ILLIONIS +*/
    var marker = new google.maps.Marker({
        position: illinois,//position of weighpoint
        icon: './media/img/mapKeys/event/moderate/tornadoM.png',
        title: 'Illionis',
        infowindow: illionisInfoWindow,
        map:map
    });

    /* CLICK DISPLAY INFOWINDOW */
    google.maps.event.addListener(marker, 'click', function () {
        this.infowindow.open(map, this);
    });


    /* BRAZIL */
    var marker = new google.maps.Marker({
        position: brazil,//position of weighpoint
        icon: './media/img/mapKeys/event/weak/hurricaneW.png',
        title: 'Brazil',
        infowindow: brazilInfoWindow,
        map: map
    });

    /* CLICK DISPLAY INFOWINDOW */
    google.maps.event.addListener(marker, 'click', function () {
        this.infowindow.open(map, this);

    });
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}


    

