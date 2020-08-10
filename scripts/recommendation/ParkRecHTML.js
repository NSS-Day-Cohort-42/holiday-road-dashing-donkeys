export const ParkRecHTML = (filteredPark) => {
    return `
        <div class="recommended__Park">
            <h5 class="recommended__parkName">${filteredPark.parkName}</h5>
            <p class="recommended_activity">${
                filteredPark.activities
                .map(
                    (activities) => {
                        return `${activities.name}`
                }).join("")
                
            
            }
            </p>
            
        </div>
    `
}

