export const FoodRecHTML = (filteredFood) => {
    return `
        <div class="recommended__Food">
            <h5 class="recommended__businessName">${filteredFood.businessName}</h5>
            <p class="recommended__location">${filteredFood.city}, ${filteredFood.state}</p>

        </div>
    `
}