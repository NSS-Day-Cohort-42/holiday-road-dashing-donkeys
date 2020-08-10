  
const eventHub = document.querySelector(".container")

export const ParkDetail = () => {
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id.includes("parkDetail--")) {

            const parkDetail = clickEvent.target.id.split("--")[1]
            const contentTarget = document.querySelector(`.description--${parkDetail}`)
            contentTarget.showModal()
        }
    })
}