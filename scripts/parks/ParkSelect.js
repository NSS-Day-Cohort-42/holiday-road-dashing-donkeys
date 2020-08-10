/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useParks, getParks } from "./ParkProvider.js"
import { useWeather } from "../weather/WeatherProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__parks")
const eventHub = document.querySelector(".container")

// Capture that the user generated a change event by the browser
contentTarget.addEventListener("change", (changeEvent) => {
    const parkName=changeEvent.target.value
    const parkArray=useParks()
    const correctParkArray=parkArray.filter(parkObj=>{
        return parkName===parkObj.fullName
    }    
    )
    const correctPark=correctParkArray[0]
    console.log(correctPark)
    // Construct the event based on agreement with Steve
    const customEvent = new CustomEvent("parkSelected", {
        detail: { 
            parkId: correctPark.id,
            parkName:correctPark.fullName,
            phoneNumberArray:correctPark.contacts.phoneNumbers,
            emailArray:correctPark.contacts.emailAddresses,
            state:correctPark.states,
            activitiesArray:correctPark.activities,
            entranceFeeArray:correctPark.EntranceFee,
            hoursOfOperationArray:correctPark.operatingHous,
            topicsArray:correctPark.topics,
            description:correctPark.description,
            addressesArray:correctPark.addresses,
        }
    })
    
    eventHub.dispatchEvent(customEvent)
})

const render = parksCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="parkSelect">
            <option value="0">Please select a park...</option>
            ${
                parksCollection.map(
                    parkObject => {
                        return `<option value="${ parkObject.fullName }">${parkObject.fullName}</option>`
                    }
                ).join("")
            }
        </select>
    `
}

export const parkSelect = () => {
    getParks().then(() => {
        // Get all convictions from application state
        const parks = useParks()
        render(parks)
        return true
    })
}
