import {getItineraries, useItinerary, saveItinerary} from "./ItineraryProvider.js"
import {ItineraryHTMLConv} from "./ItineraryHTML.js"

const contentTarget = document.querySelector(".itenerarySaves")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {  //find correct selector to extract values from selected lists to then render to the itinerary
    if(clickEvent.target.id === "save") {

        const eateryName = document.querySelector(".selectedFood").className.split(" ")
        const attractionName = document.querySelector(".selectedAttraction").className.split(" ")
        const parkName = document.querySelector(".parkList").className.split(" ")

        console.log(eateryName[1])
        console.log(attractionName[1])
        console.log(parkName[1])
        const newItinerary = {
            eatery : eateryName[1],
            park : parkName[1],
            attractionId : attractionName[1]
        }
        saveItinerary(newItinerary)
    }
    
    
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
        const newItinerary = useItinerary()
        render(newItinerary)
    })
    
    export const ItineraryList = () => {
        getItineraries()
            .then(() => {
                const allItineraries = useItinerary()
                render(allItineraries)
            })
    }