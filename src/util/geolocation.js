const request = require("request");

function geoLocation(address,callback){
    const mapboxURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ decodeURIComponent(address)+".json?access_token=pk.eyJ1IjoidGVsbDJhYnJhciIsImEiOiJja2x2eWlyemUwN2EzMm5rdmp2czVxMml4In0.vJM_LzWZc_lIjuWaR7xOww&limit=1";
    
    request(mapboxURL,(error,response)=>{
        const weatherObject = JSON.parse(response.body);
        if(error){
            callback("Error! Check your network connection",undefined);
        }else if(weatherObject.features.length === 0){
            callback("Bad query parameter!",undefined);
        }else{
            
            var longitude = weatherObject.features[0].center[0];
            var latitude = weatherObject.features[0].center[1];
            var place_name = weatherObject.features[0].place_name;
            callback(undefined,{longitude,latitude,place_name});
        }
    });
}



module.exports = geoLocation;