export const attractionHTMLConverter = (attraction) => {
    return `

        <section class="selectedAttraction">
            <h5 class="attractionName">${attraction.name}</h5>
            <button id="attractionDetail--${attraction.id}">Detail</button>
            <dialog class="attraction--${attraction.id}"
            <p class="attraction__description">${attraction.description}</p>
            <p class="attraction__location">${attraction.city}, ${attraction.state}</p>
            <button id="attractionClose">Close</button>
        </dialog>
        </section>
    `
}