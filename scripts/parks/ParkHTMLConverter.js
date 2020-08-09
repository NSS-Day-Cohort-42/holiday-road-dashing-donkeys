

export const ParkHTMLConverter = (park) => {
    return `
    
        <section class="park">
            <h4>${park.parkName}</h4>
            <button id="parkDetail--${park.parkId}">Details</button>
            <dialog class="description--${park.parkId}" id="parkClose">
                <p class="park__description">${park.description}</p>
                <p class="park__phoneNumber">${park.phoneNumberArray[0].phoneNumber}</p>
                <p class="park__states">${park.states}</p>
                <p class="park__activities">${
                    park.activitiesArray.map(
                        (activities) => {
                            return `${activities.name}`
                        }).join("")}</p>
                <p class="park__EntranceFee">${park.entranceFeeArray[0].cost}</p>
                <p class="park__EntranceFee">${park.entranceFeeArray[0].description}</p>
                <p class="park__topics">${
                    park.topicsArray.map(
                        (topics) => {
                            return `${topics.name}`
                        }).join("")}</p>
                <p class="park__address">${park.addressesArray[0].city}</p>
                <button id="parkClose">Close</button>
            </dialog>
           
        </section>
    `
}
  // <div>${park.addressesArray[0].city}</div>
            // <div>${park.addressesArray[0].state}</div> 