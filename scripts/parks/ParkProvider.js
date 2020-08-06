//import "../Settings.js"
import {key} from "../Settings.js"


let parks = []

export const useParks = () => {
    return parks.slice()
}


export const getParks = () => {
    return fetch(`http://localhost:3000/db`)
        .then(response => response.json())
        .then(parsedParks => {
            parks = parsedParks.data
            
        })
}

        
