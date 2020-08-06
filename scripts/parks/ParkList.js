import { useParks, getParks } from "./ParkProvider.js";
import { ParkHTMLConverter } from "./ParkHTMLConverter.js";

const contentTarget = document.querySelector(".parkContainer")

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