import { useAttractions, getAttractions } from "./AttractionProvider.js";
import { attractionHTMLConverter } from "./AttractionHTMLConverter.js";

const contentTarget = document.querySelector(".attractionContainer")

export const AttractionList = () => {

    getAttractions()
        .then(() => {
            const attractionArray = useAttractions()
            let attractionHTMLRepresentations = ""
            attractionArray.forEach(attraction => {
                attractionHTMLRepresentations += attractionHTMLConverter(attraction)
            })

            contentTarget.innerHTML = `
                <h2>Attractions</h2>
                <article class="parkList">
                ${ attractionHTMLRepresentations }
                </article>
                `
        })
} 