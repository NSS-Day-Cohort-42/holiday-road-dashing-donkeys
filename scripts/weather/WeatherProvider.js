import "../Settings.js"
import {key} from "../Settings.js"

let weather = []

const eventHub=document.querySelector(".container")
eventHub.addEventListener("parkSelected",event=>{
    const parkState=event.detail.state
    getWeather(parkState)
})

export const useWeather = () => {
    return weather.slice()
}


const getWeather = (parkState) => {
    return fetch(`api.openweathermap.org/data/2.5/forecast?q=${parkState},us&mode=json&appid=${key.weatherKey}`)
        .then(response => response.json())
        .then(parsedWeather => {
            weather = parsedWeather.list
        })
}

        
