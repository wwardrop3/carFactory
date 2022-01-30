import { getWheels } from "./database.js"

const wheels = getWheels()


export const Wheels = () =>{

    let html = `<h2>Wheels</h2>`
    
    html += `<select id = "resource">`

    const listItemsArray = wheels.map(
        (wheel) => {
            html+=`<option value = "${wheel.id}">${wheel.name}</option>`
        })
    html+= listItemsArray.join("")
    
    html+=`</select>`
    
    return html



}

document.addEventListener(
    "change",
    (changeEvent) => {
        if(changeEvent.target.id === "resource") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)
        }
        

    }
)

