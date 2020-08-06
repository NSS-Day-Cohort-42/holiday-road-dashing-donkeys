// eventHub.dispatchEvent(parkEvent)
//     }
//     if (clickEvent.target.id === "parksDialog") {
//         closeParkDialog()
//     }
// })

export const ParkHTMLConverter = (park) => {
    return `
        <section class="selected">
            <h4>${park.fullName}</h4>
            <button id="park-details">Details</button>
        </section>
    `
}