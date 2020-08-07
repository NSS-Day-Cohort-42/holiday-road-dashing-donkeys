import { useParks, getParks } from "./ParkProvider.js";
import { ParkHTMLConverter } from "./ParkHTMLConverter.js";
import { ParkDetail } from "./ParkDetail.js";

const contentTarget = document.querySelector(".parkContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("parkSelected", parkSelectedEvent => {
    
    const parkChosen = parkSelectedEvent.detail.fullName
    const allParks = useParks()

    
    const filteredByParks = allParks.find((park) => {
        return parkChosen === park.id
    })

    render(filteredByParks)
})

const render = (parkArray) => {
    contentTarget.innerHTML = `
    <div class="selectedPark">
        ${
            ParkHTMLConverter(parkArray)
        }
        </div>
        `
}


export const ParkList = () => {
    getParks()
        .then(ParkDetail)
        console.log("renders dialog values")
}