import { getInteriors, setInteriors } from "./database.js"


const wheels = getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if(changeEvent.target.id === "interiorOption") {
            console.log(changeEvent.target.value)
            setInteriors(parseInt(changeEvent.target.value))
        }
        

    }
)

//define function that returns a header and dropdown list of interior options
export const Interiors = () =>{
    let html = `<h2>Interiors</h2>`
    html += `<select id = "interiorOption">`

    const listItemsArray = wheels.map(interior => {
        html += `<option value = "${interior.id}">${interior.name}</option>`
    })

    html += listItemsArray.join("")

    html += `</select>`
    return html

}

//add event listener that notices change in dropdown and saves the new value into the temp customOrder array in database

