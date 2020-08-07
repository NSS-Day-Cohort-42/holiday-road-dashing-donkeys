import { useAttractions, getAttractions } from "./AttractionProvider.js"


const contentTarget = document.querySelector(".filters__attractions")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", (changeEvent) => {

    if(changeEvent.target.id === "attractionSelect") {
    const name = changeEvent.target.value
    const customEvent = new CustomEvent("attractionSelected", {
        detail: { 
            name: name
            
        }
    })

    eventHub.dispatchEvent(customEvent)
}      
})

const render = attractionCollection => {
    
    contentTarget.innerHTML = `
        <select class="dropdown" id="attractionSelect">
            <option value="0">Select Attraction</option>
            ${
                attractionCollection.map(
                    attractionObject => {
                        return `<option value="${ attractionObject.id}">${attractionObject.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}

export const attractionSelect = () => {
    getAttractions().then(() => {
        const attractions = useAttractions()
        render(attractions)
    })
}