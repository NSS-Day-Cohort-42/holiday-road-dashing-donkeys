import { useParks, getParks } from "./ParkProvider.js";
import { ParkHTMLConverter } from "./ParkHTMLConverter.js";
import { ParkDetail } from "./ParkDetail.js";

const contentTarget = document.querySelector(".parkContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("parkSelected", parkSelectedEvent => {
    render(parkSelectedEvent.detail)
    
    
})

const render = (parkObject) => {
    contentTarget.innerHTML = `
    <div class="selectedPark ${parkObject.parkId}">
        ${
            ParkHTMLConverter(parkObject)
        }
        </div>
        `
}


export const ParkList = () => {
    getParks()
        .then(ParkDetail)
}