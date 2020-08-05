import {getEateries, useEateries} from "./EateryProvider.js"


const contentTarget = document.querySelector(".foodSelector")
const evenHub = document.querySelector(".container")

contentTarget.addEventListener("change", (changeEvent) => {
    if(changeEvent.target.id === "eateriesDropdown") {
        const businessName = changeEvent.target.value
        const customEvent = new CustomEvent("eaterySelected", {
            detail : {
                name : businessName
            }
        })
        evenHub.dispatchEvent(customEvent)
    }
}

const render = eateriesCollection => {
    contentTarget.innerHTML = `
        <select class="eateriesDropdown" id="food">
            <option value="0">Select Food</option>
        ${
            eateriesCollection.map(
                eateryObj => {
                    return `<option value="${eateryObj.id}"> ${eateryObj.name}</option>`
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