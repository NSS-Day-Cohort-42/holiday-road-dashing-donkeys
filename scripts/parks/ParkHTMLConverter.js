// eventHub.dispatchEvent(parkEvent)
//     }
//     if (clickEvent.target.id === "parksDialog") {
//         closeParkDialog()
//     }
// })

export const ParkHTMLConverter = (parkObj) => {
    return `
        <section class="selected">
            <h4>${parkObj.parkName}</h4>
            <button id="park-details">Details</button>
        </section>
    `
}