import {useWeather} from "./WeatherProvider.js"
import {weatherHTML} from "./weatherHTML.js"

const contentTarget=document.querySelector(".weather")

export const WeatherList=()=>{
    const weatherArray=useWeather()
    let content=""
    content+=weatherArray.forEach(weatherObj=>{
        weatherHTML(weatherObj)
    })
    contentTarget.innerHTML=content
}