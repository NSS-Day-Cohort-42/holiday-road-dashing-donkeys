import {useWeather,getWeather} from "./WeatherProvider.js"
import {weatherHTML} from "./weatherHTML.js"

const contentTarget=document.querySelector(".weather")
const eventHub=document.querySelector(".container")

eventHub.addEventListener("parkSelected",event=>{
    const park=event.detail
    getWeather(park)
    .then(()=>{
    const weatherArray=useWeather()
    
    contentTarget.innerHTML=weatherArray.map((weatherObj)=>{
        return weatherHTML(weatherObj)
    }).join("")
    })
})