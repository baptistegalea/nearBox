var onSuccess = function(position) {
    $('#result').text('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
    
    weather.setLatitude(position.coords.latitude);
    weather.setLongitude(position.coords.longitude);
};

// onError Callback receives a PositionError object
//
function onError(error) {
	$('#error')('code: '    + error.code    + '\n' +
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
	var result = $.ajax({
        contentType: "application/json; charset=utf-8",
					url : 'http://maps.googleapis.com/maps/api/geocode/json?latlng=45.7698616666666,4.8591633333&sensor=true',       
					//data: 'data= ' + $getValue.value,
					
					type : 'post',
				    async:false,
					dataType : 'json', 
				}).responseText;
	return result;
}  

function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError,   {enableHighAccuracy:true,maximumAge:Infinity, timeout:60000}); 
}