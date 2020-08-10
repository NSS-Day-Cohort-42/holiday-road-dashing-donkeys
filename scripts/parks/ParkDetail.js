  
const eventHub = document.querySelector(".container")

export const ParkDetail = () => {
    eventHub.addEventListener("click", clickEvent => {
        
        if(clickEvent.target.id.includes("parkDetail--")) {
            const parkDetail = clickEvent.target.id.split("--")[1]
            const contentTarget = document.querySelector(`.description--${parkDetail}`)
            contentTarget.showModal()
        } else if(clickEvent.target.id === "parkClose") {
            const dialogClass = document.getElementById("parkClose")
            dialogClass.close()
        }
    })
}