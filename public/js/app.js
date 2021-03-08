console.log('Client side javascript file is loaded!')


const form = document.querySelector("form");
const search = document.querySelector("input");
const forcast = document.querySelector("#forcast");
const region = document.querySelector("#location");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    var location = search.value;
    if(location){
        fetch("http://127.0.0.1:3000/weather?address="+location).then(response=>{
            response.json().then(data=>{
                if(data.error){
                    console.log(data.error);
                    forcast.textContent=data.error;
                }else{
                    
                    region.textContent = data.place_name;
                    forcast.textContent=`It is ${data.weather_descriptions} and temperature is ${data.temperature} degree`;
                }
            });
        });
        forcast.textContent="Loading...";
        region.textContent="";
    }else{
     forcast.textContent = "Please enter location!";
    }
    
});