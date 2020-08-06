import {getEateries, useEateries} from "./EateryProvider.js"


const contentTarget = document.querySelector(".filters__eateries")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", (changeEvent) => {
    if(changeEvent.target.id === "food") {
        const businessName = changeEvent.target.value
        const customEvent = new CustomEvent("eaterySelected", {
            detail : {
                name : businessName
            }
        })
        
        eventHub.dispatchEvent(customEvent)
    }
})

const render = eateriesCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="food">
            <option value="0">Select Food</option>
        ${
            eateriesCollection.map(
                eateryObj => {
                    return `<option value="${eateryObj.id}"> ${eateryObj.businessName}</option>`
                }
            ).join("")
        }
        </select>
    `
}

export const EaterySelect = () => {
    getEateries().then(() => {
        const eateries = useEateries()
        render(eateries)
        
    })
}