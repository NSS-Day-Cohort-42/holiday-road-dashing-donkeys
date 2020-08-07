import {getItineraries, useItinerary, saveItinerary} from "./ItineraryProvider.js"
import {ItineraryHTMLConv} from "./ItineraryHTML.js"

const contentTarget = document.querySelector(".itenerarySaves")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {  //find correct selector to extract values from selected lists to then render to the itinerary
    if(clickEvent.target.id === "save") {

        const eateryName = document.querySelector(".")
        
        const attractionName = document.querySelector("selectedBizzare")
        
        const parkName = document.querySelector(".parkList")
    }

    const newItinerary = {
        eatery : eateryName,
        park : parkName.value,
        attraction : attractionName
    }
    
    saveItinerary(newItinerary)
})

const render = (itineraryArray) => {
    const itinerariesToHTML = itineraryArray.map(
        currentItinerary => {
            return ItineraryHTMLConv(currentItinerary)
        }
        ).join("")
        contentTarget.innerHTML = itinerariesToHTML
    }
    
    eventHub.addEventListener("itineraryAdded", () => {
        const newItinerary = useItineraries()
        render(newItinerary)
    })
    
    export const ItineraryList = () => {
        getItineraries()
            .then(() => {
                const allItineraries = useItinerary()
                render(allItineraries)
            })
    }