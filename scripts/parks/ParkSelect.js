
import { useParks, getParks } from "./ParkProvider.js"


const contentTarget = document.querySelector(".filters__parks")
const eventHub = document.querySelector(".container")


contentTarget.addEventListener("change", (changeEvent) => {
    if(changeEvent.target.id === "description") {
        const fullName = changeEvent.target.value
    
    
    const customEvent = new CustomEvent("parkSelected", {
        detail: {
            fullName : fullName

        }
    })

    eventHub.dispatchEvent(customEvent)
    }
})

const render = parksCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="description">
            <option value="0">Please select a park...</option>
            
            ${
        parksCollection.map(
            parkObject => {
                return `<option value="${parkObject.id}">${parkObject.fullName}</option>`
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
    })
}
