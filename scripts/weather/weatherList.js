import {useWeather,getWeather} from "./WeatherProvider.js"
import {weatherHTML} from "./weatherHTML.js"

const contentTarget=document.querySelector(".weather")
const eventHub=document.querySelector(".container")

eventHub.addEventListener("parkSelected",event=>{
    const park=event.detail
    getWeather(park)
    .then(()=>{
    const weatherArray=useWeather()
    
    contentTarget.innerHTML+=`
    <h2>Five Day Forcast</h2>
    <section class=weather--section>
    ${weatherArray.map((weatherObj)=>{
        const weatherTime=weatherObj.dt_txt.split(" ")
        if(weatherTime[1]==="12:00:00"){
        return weatherHTML(weatherObj)
    }
    }).join("")}
    </section>`
    })
})