export const ItineraryHTMLConv = (itineraryObj) => {
    return `
        <section class=itinerary">
            <div class="itinerary__park">${itineraryObj.parkName}</div>
            <div class="itinerary__attraction">${itineraryObj.attractionName}</div>
            <div class="itinerary__eatery">${itineraryObj.eateryName}</div>
        </section>
        
    `   
}