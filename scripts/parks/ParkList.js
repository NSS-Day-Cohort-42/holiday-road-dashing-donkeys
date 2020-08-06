import { useParks, getParks } from "./ParkProvider.js";
import { ParkHTMLConverter } from "./ParkHTMLConverter.js";

const contentTarget = document.querySelector(".parkContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("parkSelected", (parkSelectedEvent) => {
    
    // GOAL: FIlter displayed criminals by the arresting officer that was chosen

    // Which officer was chosen: "Suzie Police" -> arrestingOfficer
    const parkChosen = parkSelectedEvent.detail.fullName

    // Filter criminal array based on what's chosen
    const allParks = useParks()

    // Array of criminals that were arrested by chosen officer
    const filteredByParks = allParks.value(
        (currentParks) => {
            if (currentParks.fullName === parkChosen) {
                return true
            }
            return false
        }
    )

    render(filteredByParks)
})

export const ParkList = () => {

    getParks()
        .then(() => {
            const parkArray = useParks()
            let parkHTMLRepresentations = ""
            parkArray.forEach(park => {
                parkHTMLRepresentations += ParkHTMLConverter(park)
            })

            contentTarget.innerHTML = `
                <h2>Parks</h2>
                <article class="parkList">
                ${ parkHTMLRepresentations }
                </article>
                `
        })
} 