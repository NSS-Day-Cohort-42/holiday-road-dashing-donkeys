import {getParks, useParks} from "../parks/ParkProvider.js"
import {ParkRecHTML} from "./ParkRecHTML.js"

const contentTarget = document.querySelector(".parkRecommend")

const ParkFilter = () => {
    const allparks = useParks()
    const parksActivityArray = allparks
    .map(park => {
        return {
            parkName : park.fullName,
            activities: park.activities
        }
    })
    
    const filteredParks = parksActivityArray.filter(park => park.activities.find(activity => activity.name === "Geocaching" || activity.name === "Backcountry Hiking"))
    let threeParks = []
    for(let i=0; i < 3; i++) {
        const threeRecs = filteredParks[Math.floor(Math.random()* filteredParks.length)]
            threeParks.push(threeRecs)
    }
          
       
        
   
   
    
    render(threeParks)
}

const render = (recArray) => {
    const recsToHTML = recArray.map(
        currentRec => {
            return ParkRecHTML(currentRec)
        }
    ).join("")

    contentTarget.innerHTML += `
        <h4 class="parksRec__title">Recommended National Parks</h4>
        <div class="parkRec-container">
            
            ${recsToHTML}
        </div>
    `
}

export const ParkRec = () => {
    getParks()
        .then(ParkFilter)
}


