let eateries = []

export const useEateries = () => {
    return eateries.slice()
}

export const getEateries = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
        .then(response => response.json())
        .then(parsedEateries => {
            eateries = parsedEateries
        })
}