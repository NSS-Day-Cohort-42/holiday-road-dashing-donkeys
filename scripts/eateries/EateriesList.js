import {useEateries, getEateries} from "./EateryProvider.js"
import {EateryHTMLConv} from "./EateriesHTML.js"
import { EateryDetail} from "./EateryDetail.js"


//const contentTarget = document.querySelector(".eateryList")
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".iteneraryPreview")

eventHub.addEventListener("eaterySelected", event => {
    //eatery id
    const selectedEatery = event.detail.name
    console.log(selectedEatery)
    
    const allEateries = useEateries()
    const findEatery = allEateries.find((eatery) => {
        return parseInt(selectedEatery) === eatery.id   
    })
    console.log("renders from found value")
    render(findEatery)
        
})

const render = (eateryArray) => {
    contentTarget.innerHTML = `
         <div class="selectedFood"> 
            ${
                EateryHTMLConv(eateryArray)
            }
        </div>
        `
}


export const EateryList = () => {
    getEateries()
        .then(EateryDetail)
        
}