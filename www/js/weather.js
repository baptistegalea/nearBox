function WeatherClass(){
 };

 WeatherClass.prototype = {

	longitude:0,

	latitude:0,	

	locationData:'',

	weatherData:'',

	getLongitude:function(){
		return this.longitude;
	},
	getLatitude:function(){
		return this.latitude;
	},
	getLocation:function(){
		return this.locationData;
	},
	getWeatherData:function(){
		return this.weatherData;
	},
	setLongitude:function(data){
		this.longitude = data;
	},
	setLatitude:function(data){
		this.latitude = data;
	},
	setLocation:function(data){
		this.locationData = data;
	},
	setWeatherData:function(data){
		this.weatherData = data;
	}
 }