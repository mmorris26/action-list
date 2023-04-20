import { useState } from "react";


export default function Weather (props){
   
    const baseURL = "http://api.weatherapi.com/v1";
    const apiKey = "ba9d052e557d46008bb85552231704";
    const postcode = props.postcodeState;
    
    
    
    
    
    const [weather, setWeather] = useState({img: "", summary: "", rain: null, temperature: null});

    //const [futureWeather, setFutureWeather] = useState({img: "", summary: "", rain: null, temperature: null});
    
    function getCurrentWeather(){
    
      fetch (baseURL + "/current.json" + "?key=" + apiKey + "&q=" + postcode + "&aqi=no")
      .then((response) => {
          return response.json();
      })
      .then((results) => {
          let current = results.current;
          console.log(results);
          setWeather ({...weather, 'img': current.condition.icon, 'summary': current.condition.text, 'rain': current.precip_in, 'temperature': current.temp_c})
      })
    };

    // function getFutureWeather(){

    // }
 
   
    return(
        <>
        <h2>Weather</h2>

        <button className="weather-button" onClick={getCurrentWeather}>Get Weather</button>
        <div className="weather-icon-div">
        <img src={weather.img} className="weather-image"></img>
        </div>
        <h3 className="weather-summary">{weather.summary}</h3>
        <h3 className="weather-rain">Rain: {weather.rain}</h3>
        <h3 className="temperature">Temperature: {weather.temperature}</h3>
        </>
        
    )
}