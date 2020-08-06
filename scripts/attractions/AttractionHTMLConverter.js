export const attractionHTMLConverter = (attraction) => {
    return `

        <section class="selectedAttraction">
            <h5 class="attractionName">${attraction.name}</h5>
            <button id="attractionDetail--${attraction.id}">Details</button>
            <dialog class="attraction--${attraction.id}"
            <p class="attraction__description">${attraction.description}</p>
            <p class="attraction__location">${attraction.city}, ${attraction.state}</p>
        </dialog>
        </section>
    `
}