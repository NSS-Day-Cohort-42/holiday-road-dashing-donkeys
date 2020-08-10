import {getEateries, useEateries} from "../eateries/EateryProvider.js"
import {FoodRecHTML} from "./FoodRecHTML.js"

const contentTarget = document.querySelector(".recommend")

const Foodfilter = () => {
    const allEateries = useEateries()
    const filteredFood = allEateries.filter(food => food.ameneties.wifi === true)
    let threeRecs = []
    for (let i = 0; i < 3; i++) {
        const testThree = filteredFood[Math.floor(Math.random() * filteredFood.length)]
            threeRecs.push(testThree)
    }
    
    render(threeRecs)

}




const render = (recArray) => {

    const recsToHTML = recArray.map(
        currentRec => {
            return FoodRecHTML(currentRec)
        }
    ).join("")
        
    contentTarget.innerHTML = `
        <div class="foodRec-container">
            ${recsToHTML}
        </div>
    `
        
        
    
}

export const FoodRec = () => {
    getEateries()
        .then(Foodfilter)
}
