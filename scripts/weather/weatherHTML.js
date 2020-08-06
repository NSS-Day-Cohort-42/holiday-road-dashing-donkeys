export const weatherHTML=(weatherObj)=>{
    const temp=math.round((weatherObj.main.temp-273.15)*(9/5)+32)
    const feelsLike=math.round((weatherObj.main.feels_like-273.15)*(9/5)+32)
    const maxTemp=math.round((weatherObj.main.temp_max-273.15)*(9/5)+32)
    const minTemp=math.round((weatherObj.main.temp_min-273.15)*(9/5)+32)
    return `
    <div class=weather--day>${weatherObj.dt_txt}</div>
    <div>${weatherObj.weather[0].description}</div>
    <div>Temperature: ${temp}F</div>
    <div>Feels like: ${feelsLike}F</div>
    <div>Max temperature: ${maxTemp}F</div>
    <div>Min temperature: ${minTemp}F</div>
    `
}