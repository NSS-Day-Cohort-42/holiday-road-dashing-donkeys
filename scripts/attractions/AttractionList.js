import { useAttractions, getAttractions } from "./AttractionProvider.js";
import { attractionHTMLConverter } from "./AttractionHTMLConverter.js";
import { attractionDetail } from "./AttractionDetail.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".attractionList")

eventHub.addEventListener("attractionSelected", event => {
    const selectedAttraction = event.detail.name
    const allAttractions = useAttractions()
    const findAttraction = allAttractions.find((attraction) => {
        return parseInt(selectedAttraction) === attraction.id
    })
    render(findAttraction)
})

const render = (attractionArray) => {
    contentTarget.innerHTML = `
        <div class="selectedAttraction ${attractionArray.id}">
            ${attractionHTMLConverter(attractionArray)}
        </div>
            `
}


export const AttractionList = () => {
    getAttractions()
        .then(attractionDetail) 
}
