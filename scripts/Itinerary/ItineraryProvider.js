let itineraries = []

const eventHub = document.querySelector(".container")

const dispatchStateChangedEvent = () => {
    const itineraryAdded = new CustomEvent("itineraryAdded")
    eventHub.dispatchEvent(itineraryAdded)
}

export const useItinerary = () => {
    return itineraries.slice()
}

export const getItineraries = () => {
    return fetch('http://localhost:3000/itineraries')
        .then(response => response.json())
        .then(parsedItineraries => {
            itineraries = parsedItineraries
        })
}

export const saveItinerary = (itinerary) => {
    return fetch('http://localhost:3000/itineraries', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(itinerary)
    })
    .then(getItineraries())
    .then(dispatchStateChangedEvent())
}