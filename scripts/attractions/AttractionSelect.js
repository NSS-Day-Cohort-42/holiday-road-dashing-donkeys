/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useAttractions, getAttractions } from "./AttractionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__attractions")
const eventHub = document.querySelector(".container")

// Capture that the user generated a change event by the browser
contentTarget.addEventListener("attractionChange", (AttractionEvent) => {

    // Construct the event based on agreement with Steve
    const customEvent = new CustomEvent("attractionSelected", {
        detail: { 
            attractionId: AttractionEvent.target.value
            
        }
    })

    eventHub.dispatchEvent(customEvent)
})

const render = attractionCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="attractionSelect">
            <option value="0">Please select a attraction...</option>
            ${
                attractionCollection.map(
                    attractionObject => {
                        return `<option value="${ attractionObject.name }">${attractionObject.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}

export const attractionSelect = () => {
    getAttractions().then(() => {
        // Get all convictions from application state
        const attractions = useAttractions()
        render(attractions)
    })
}