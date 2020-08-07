
export const EateryHTMLConv = (eateryArray) => {
    return `
        <h5 class="selectedEatery">${eateryArray.businessName}</h5>
        <button id="eateryDetail--${eateryArray.id}">Detail</button>
        <dialog class="food--${eateryArray.id}">
            <p class="eatery__description">${eateryArray.description}</p>
            <p class="eatery__location">${eateryArray.city}, ${eateryArray.state}</p>
            <button id="eateryClose">Close</button>
        </dialog>
    `
}