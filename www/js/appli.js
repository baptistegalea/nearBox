var onSuccess = function(position) {
	//alert('ok');
    /*$('#result').text('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');*/


    weather.setLatitude(position.coords.latitude);
    weather.setLongitude(position.coords.longitude);
   	var locationData = getLocationData();
 
   	weather.setLocation(locationData);


   	document.getElementById('result').textContent = weather.getLocation().ville + ' - ' + weather.getLocation().departement + ' - ' + weather.getLocation().pays;

};

// onError Callback receives a PositionError object
//
function onError(error) {
	//alert('error');

	alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}
   	    
function detectmob() { 
	 if( navigator.userAgent.match(/Android/i)
	 || navigator.userAgent.match(/webOS/i)
	 || navigator.userAgent.match(/iPhone/i)
	 || navigator.userAgent.match(/iPad/i)
	 || navigator.userAgent.match(/iPod/i)
	 || navigator.userAgent.match(/BlackBerry/i)
	 || navigator.userAgent.match(/Windows Phone/i)
    	 ){
    	    return true;
    	  }
    	 else {
    	    return false;
    	  }
}
	    
function getLocationData(){
	var longitude = weather.getLongitude();
	var latitude = weather.getLatitude();
	var result = $.ajax({
					url : 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&sensor=true',       
					type : 'POST',
				    async:false,
					dataType : 'json', 
				}).responseText;
	result = JSON.parse(result);
	
	var pays = result.results[0].address_components[5].long_name;
	var ville = result.results[0].address_components[2].long_name;
	var departement = result.results[0].address_components[3].long_name;
		
	result = {'pays' : pays, 'ville' : ville, 'departement': departement};
	
	return result;
}  

function onDeviceReady() {
	//alert('ready');
    navigator.geolocation.getCurrentPosition(onSuccess, onError,   {enableHighAccuracy:true,maximumAge:Infinity, timeout:15000}); 
}