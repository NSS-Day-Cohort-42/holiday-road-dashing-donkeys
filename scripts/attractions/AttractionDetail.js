const eventHub = document.querySelector(".container")

export const attractionDetail = () => {
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id.includes("attractionDetail--")) {
            const attractionDetail = clickEvent.target.id.split("--")[1]
            const contentTarget = document.querySelector(`.attraction--${attractionDetail}`)
            contentTarget.showModal()
        }
    })
}