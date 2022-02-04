import { getPaintColors, setPaintColors } from "./database.js"

const paints = getPaintColors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if(changeEvent.target.id === "paintOption") {
            console.log(changeEvent.target.value)
            setPaintColors(changeEvent.target.value)
        }
        

    }
)
export const Paints = () =>{
    let html = `<h2>Paints</h2>`

    html += `<select id = "paintOption">`

    const listArray = paints.map(
        paint=>{
            html+=`<option value = "${paint.id}">${paint.name}</option>`
        }
    )
    html+= listArray.join("")
    html+= `</select>`
    
    return html
}

//add event listener that notices change in dropdown and saves the new value into the temp customOrder array in database

