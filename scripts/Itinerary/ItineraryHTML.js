export const ItineraryHTMLConv = (eateryObj, parkObj, attractionObj) => {
    return `
        <section class=itinerary">
            <div class="itinerary__park">${parkObj.fullName}</div>
            <div class="itinerary__attraction">${attractionObj.name}</div>
            <div class="itinerary__eatery">${eateryObj.businessName}</div>
        </section>
        
    `
}