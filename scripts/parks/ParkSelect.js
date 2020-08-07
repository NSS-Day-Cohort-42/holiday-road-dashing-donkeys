import { useParks, getParks } from "./ParkProvider.js"


const contentTarget = document.querySelector(".filters__parks")
const eventHub = document.querySelector(".container")


contentTarget.addEventListener("change", (changeEvent) => {
    const parkName=changeEvent.target.value
    const parkArray=useParks()
    const correctParkArray=parkArray.filter(park=>{
        return parkName===park.fullName
    }    
    )
    const correctPark=correctParkArray[0]
    console.log(correctPark)
    
    const customEvent = new CustomEvent("parkSelected", {
        detail: {
            parkId: correctPark.id,
            parkName:correctPark.fullName,
            phoneNumberArray:correctPark.contacts.phoneNumber,
            emailArray:correctPark.contacts.emailAddresses,
            state:correctPark.states,
            activitiesArray:correctPark.activities,
            entranceFeeArray:correctPark.EntranceFee,
            hoursOfOperationArray:correctPark.operatingHous,
            topicsArray:correctPark.topics,
            description:correctPark.description,
            addressesArray:correctPark.addresses,


        }
    })

    eventHub.dispatchEvent(customEvent)
    
})

const render = parksCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="description">
            <option value="0">Please select a park...</option>
            
            ${
        parksCollection.map(
            parkObject => {
                return `<option value="${parkObject.fullName}">${parkObject.fullName}</option>`
            }
        ).join("")
        }     
        </select>
    `
}

export const parkSelect = () => {
    getParks().then(() => {
        // Get all convictions from application state

        const parks = useParks()
        render(parks)
    })
}