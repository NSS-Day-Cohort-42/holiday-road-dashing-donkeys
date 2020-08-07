import {key} from "../Settings.js"

let parks = []

export const useParks = () => {
    return parks.slice()
}


export const getParks = () => {
    return fetch(`http://localhost:3000/data`)
        .then(response => response.json())
        .then(parsedParks => {
            parks = parsedParks
        })
}

        
