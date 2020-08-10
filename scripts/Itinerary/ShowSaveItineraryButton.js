const eventHub=document.querySelector(".container")
const contentTarget=document.querySelector(".itinerarySaveButton")
let attractionTrue=false
let eateryTrue=false
let parkTrue=false

eventHub.addEventListener("attractionSelected",()=>{
    if(!attractionTrue){
        attractionTrue=true
        if(attractionTrue&&eateryTrue&&parkTrue){
            renderSaveButton()
        }
    }
})

eventHub.addEventListener("eaterySelected",()=>{
    if(!eateryTrue){
        eateryTrue=true
        if(attractionTrue&&eateryTrue&&parkTrue){
            renderSaveButton()
        }
    }

})

eventHub.addEventListener("parkSelected",()=>{
    if(!parkTrue){
        parkTrue=true
        if(attractionTrue&&eateryTrue&&parkTrue){
            renderSaveButton()
        }
    }
})

const renderSaveButton=()=>{
    contentTarget.innerHTML+=`<button id="save">Save Button</button>`
}