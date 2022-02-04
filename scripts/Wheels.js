import { getWheels, setWheels } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if(changeEvent.target.id === "wheelOption") {
            console.log(changeEvent.target.value)
            setWheels(parseInt(changeEvent.target.value))
        }
        
    }
)




export const Wheels = () =>{

    let html = `<h2>Wheels</h2>`
    
    html += `<select id = "wheelOption">`

    const listItemsArray = wheels.map(
        (wheel) => {
            html+=`<option value = "${wheel.id}">${wheel.name}</option>`
        })
    html+= listItemsArray.join("")
    
    html+=`</select>`
    
    return html



}


//add event listener that notices change in dropdown and saves the new value into the temp customOrder array in database

