const eventHub = document.querySelector(".container")



export const EateryDetail = () => {
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id.includes("eateryDetail--")) {
            const eateryDetail = clickEvent.target.id.split("--")[1]
            const contentTarget = document.querySelector(`.food--${eateryDetail}`)
            contentTarget.showModal()
        } else if(clickEvent.target.id === "eateryClose") {
            const dialogClass = document.getElementById("eateryClose")
            console.log(dialogClass)
            dialogClass.close()
            
        }
    })}
   


