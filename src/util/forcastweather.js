const request = require("request");

function forcastWeather(geoLocation,callback){
    //console.log(geoLocation.longitude +" : " + geoLocation.latitude);
    const weatherstackURL = "http://api.weatherstack.com/current?access_key=a56fdd04d067368e6718ae11e62f813f&query=" + decodeURIComponent(geoLocation.latitude)+","+ decodeURIComponent(geoLocation.longitude);
    
    request(weatherstackURL,(error,response)=>{
        if(error){
            callback("Error! check your your network connectivity",undefined);
        }else if(response.body.error){
            callback(response.body.error.type);
        }else{
            const weatherObject = JSON.parse(response.body);
            var temperature = weatherObject.current.temperature;
            var location = weatherObject.location.name;
            var weather_descriptions = weatherObject.current.weather_descriptions; 
            var place_name = geoLocation.place_name
            ;
            callback(undefined,{temperature,location,weather_descriptions,place_name});
        }
    });
}


module.exports = forcastWeather;

