import { getTech } from "./database.js"

//returns array of tech data
const technologies = getTech()

//define function that returns a header and dropdown list of technology options
export const Technologies = () =>{
    let html = `<h2>Technologies</h2>`
    html+=`<select id = "resources">`

    const listItemsArray = technologies.map(
        (technology) => {
            html+=`<option value = "${technology.id}">${technology.name}</option>`
        }
    )
    html += listItemsArray.join("")
    html+= `</select>`
    return html

}

document.addEventListener(
    "change",
    (changeEvent) => {
        if(changeEvent.target.id === "resources") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)
        }
    }
)