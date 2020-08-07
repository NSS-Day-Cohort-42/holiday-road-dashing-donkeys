import "../Settings.js"
import {key} from "../Settings.js"

let weather = []

export const useWeather = () => {
    return weather.slice()
}


export const getWeather = (park) => {
 
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${park.addressesArray[0].city},${park.state},us&mode=json&appid=${key.weatherKey}`)
        .then(response => response.json())
        .then(parsedWeather => {
            weather = parsedWeather.list
        })
}

        
