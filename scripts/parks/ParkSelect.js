import { getParks, useParks } from "./ParkProvider.js";


const contentTarget = document.querySelector(".parkSelector")
const eventHub = document.querySelector(".container")


 eventHub.addEventListener("change", (changeEvent) => {
   

        console.log("Park Select: User chose a park option")

        const parkSelectedEvent = new CustomEvent("parkSelected", {
            detail: {
                parkName: changeEvent.target.value
            }
        })

        console.log("Dispatch custom parkSelected event")
        eventHub.dispatchEvent(parkSelectedEvent)
    
})


const render = (parks) => {
    console.log("ParkSelect: Park select rendered to DOM")
    contentTarget.innerHTML = `
        <select class="dropdown" id="parkSelect">
            <option value="0">Please select a Park...</option>
            ${
                parks.map(
                    park => {
                        return `<option value="${ park.fullName }">${park.fullName}</option>`
                    }
                ).join("")
            }
        </select>
    `
}


export const parkSelect = () => {
    console.log("ParkSelect: Initial render of park select")
    getParks().then(() => {
        const allParks = useParks()
        render(allParks)
    })
}
