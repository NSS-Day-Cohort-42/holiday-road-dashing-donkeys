import {getItineraries, useItinerary, saveItinerary} from "./ItineraryProvider.js"
import {ItineraryHTMLConv} from "./ItineraryHTML.js"
import {useAttractions, getAttractions} from "../attractions/AttractionProvider.js"
import {useEateries, getEateries} from "../eateries/EateryProvider.js"
import {useParks, getParks} from "../parks/ParkProvider.js"

const contentTarget = document.querySelector(".itenerarySaves")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {  //find correct selector to extract values from selected lists to then render to the itinerary
    if(clickEvent.target.id === "save") {
        
        const eateryName = document.querySelector(".selectedFood").className.split(" ")
        const attractionName = document.querySelector(".selectedAttraction").className.split(" ")
        const parkName = document.querySelector(".selectedPark").className.split(" ")
        
        const newItinerary = {
            eatery : parseInt(eateryName[1]),
            park : parkName[1],
            attractionId : parseInt(attractionName[1])
        }
        saveItinerary(newItinerary)
    }
    
    
})
const render = (itineraryArray) => {
    contentTarget.innerHTML=""
    getParks()
    getEateries()
    getAttractions().then(()=>{
    itineraryArray.forEach(currentItinerary=>{
        const allEateries = useEateries()
        const allAttractions=useAttractions()
        const allParks=useParks()
        let objectArray=[]
        {
        const findEatery = allEateries.find((eatery) => {
            return currentItinerary.eatery === eatery.id   
        })
        const findParks=allParks.find((park)=>{
            return currentItinerary.park===park.id
        })
        
        const findAttractions=allAttractions.find((attraction)=>{
            return currentItinerary.attractionId===attraction.id
        })
        objectArray=[findEatery,findParks, findAttractions]
    }
    {
        contentTarget.innerHTML+=`
        <div class="saved">
        ${ItineraryHTMLConv(objectArray[0],objectArray[1],objectArray[2])}
        </div>`
    }
})
})
    }
    
    eventHub.addEventListener("itineraryAdded", () => {
        getItineraries().then(()=>{
            const newItinerary = useItinerary()
        render(newItinerary)
        })
    })
    
    export const ItineraryList = () => {
        getItineraries()
            .then(() => {
                const allItineraries = useItinerary()
                render(allItineraries)
            })
    }