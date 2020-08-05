/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useEateries, getEateries } from "./EateryProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__eateries")
const eventHub = document.querySelector(".container")

// Capture that the user generated a change event by the browser
contentTarget.addEventListener("eateryChange", (EateryEvent) => {

    // Construct the event based on agreement with Steve
    const customEvent = new CustomEvent("eaterySelected", {
        detail: { 
            eateryId: EateryEvent.target.value
            
        }
    })

    eventHub.dispatchEvent(customEvent)
})

const render = eateryCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="eaterySelect">
            <option value="0">Please select a eatery...</option>
            ${
                eateryCollection.map(
                    eateryObject => {
                        return `<option value="${ eateryObject.businessName }">${eateryObject.businessName}</option>`
                    }
                ).join("")
            }
        </select>
    `
}

export const eaterySelect = () => {
    getEateries().then(() => {
        // Get all convictions from application state
        const eateries = useEateries()
        render(eateries)
    })
}