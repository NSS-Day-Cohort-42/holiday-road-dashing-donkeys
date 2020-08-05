import "../Settings.js"
import {key} from "../Settings.js"

console.log(key)

let parks = []

export const useParks = () => {
    return parks.slice()
}


export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${key}`)
        .then(response => response.json())
        .then(parsedParks => {
            parks = parsedParks.data
            console.log(parks)
        })
}