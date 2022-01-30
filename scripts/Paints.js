import { getPaintColors } from "./database.js"

const paints = getPaintColors()

export const Paints = () =>{
    let html = `<h2>Paints</h2>`

    html += `<select id = "resource">`

    const listArray = paints.map(
        paint=>{
            html+=`<option value = "${paint.id}">${paint.name}</option>`
        }
    )
    html+= listArray.join("")
    html+= `</select>`
    
    return html
}