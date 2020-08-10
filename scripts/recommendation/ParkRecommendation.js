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
    
    const filteredParks = parksActivityArray.filter(park => park.activities.find(activity => activity.name === "Geocaching"))
    console.log(filteredParks)
          
        //const parkGeocaching = parkObj.activities.filter(activity => activity.name === "Geocaching")
        // if(parkGeocaching.length > 0) {
        //     return parkObj
        // }
        
   
   
    
    render(filteredParks)
}

const render = (recArray) => {
    const recsToHTML = recArray.map(
        currentRec => {
            return ParkRecHTML(currentRec)
        }
    ).join("")

    contentTarget.innerHTML = `
        <div class="parkRec-container">
            ${recsToHTML}
        </div>
    `
}

export const ParkRec = () => {
    getParks()
        .then(ParkFilter)
}


// const filteredParks = allparks.map(park => {
//     return {
//         parkName: park.fullName,
//         activities: park.activities.forEach(
//             (activity) => {
//                 return activity.name.includes("Geocachin")
//             }
//         )
//     }
// })


// const geoCaching = filteredParks.map(
    //     (parks) => {
    //         return parks.activities.name
    //     }).filter(parks  === "Geocaching")
    // console.log(geoCaching)