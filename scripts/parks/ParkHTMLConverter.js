

export const ParkHTMLConverter = (park) => {
    return `
    
        <section class="park">
            <h4>${park.parkName}</h4>
          
            <button id="parkDetail--${park.id}">Details</button>
            <dialog class="description--${park.id}"
                <p class="park__description">${park.description}</p>
            </dialog>
           
        </section>
    `
}

  // <div>${park.addressesArray[0].city}</div>
            // <div>${park.addressesArray[0].state}</div>