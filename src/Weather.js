import { useState } from "react";


export default function Weather (props){
   
    const baseURL = "http://api.weatherapi.com/v1";
    const apiKey = "ba9d052e557d46008bb85552231704";
    const postcode = props.postcodeState;
    
    
    
    
    
    const [weather, setWeather] = useState({img: "", summary: "", rain: null, temperature: null});
    
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
 
   
    return(
        <>
        <h2>Weather</h2>
        <button onClick={getCurrentWeather}>Get Current Weather</button>
        <img src={weather.img} className="weather-image"></img>
        <p className="weather-summary">{weather.summary}</p>
        <p className="weather-rain">Rain: {weather.rain}</p>
        <p className="temperature">Temperature: {weather.temperature}</p>
        </>
        
    )
}