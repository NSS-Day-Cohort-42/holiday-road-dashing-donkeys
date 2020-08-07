  
const eventHub = document.querySelector(".container")

export const ParkDetail = () => {
    eventHub.addEventListener("click", clickEvent => {
        console.log(clickEvent.target)
        if(clickEvent.target.id.includes("parkDetail--")) {
            debugger
            const parkDetail = clickEvent.target.id.split("--")[1]
            const contentTarget = document.querySelector(`.description--${parkDetail}`)
            contentTarget.showModal()
        }
        console.log("parkDetail")
    })
}