

export const ParkHTMLConverter = (park) => {
    return `
    
        <section class="park">
            <h4>${park.fullName}</h4>
            <button id="parkDetail--${park.id}">Details</button>
            <dialog class="description--${park.id}"
                <p class="park__description">${park.description}</p>

            </dialog>
           
        </section>
    `
}