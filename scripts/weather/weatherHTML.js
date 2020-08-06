export const weatherHTML=(weatherObj)=>{
    const temp=(weatherObj.main.temp-273.15)*(9/5)+32
    const feelsLike=(weatherObj.main.fells_like-273.15)*(9/5)+32
    const maxTemp=(weatherObj.main.temp_max-273.15)*(9/5)+32
    const minTemp=(weatherObj.main.temp_min-273.15)*(9/5)+32
    return `
    <div class=weather--day>${weatherObj.dt_txt}</div>
    <div>${weatherObj.weather.description}</div>
    <div>Temperature: ${temp}F</div>
    <div>Feels like: ${feelsLike}F</div>
    <div>Max temperature: ${maxTemp}F</div>
    <div>Min temperature: ${minTemp}F</div>
    `
}