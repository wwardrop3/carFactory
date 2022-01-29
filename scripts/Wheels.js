import { getWheels } from "./database.js"

const wheels = getWheels()


export const Wheels = () =>{
    return `<h2>Wheels</h2>
    ${wheelsList()}`
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

const wheelsList = () => {
    let html = `<select id = "resource">`

    wheels.forEach(wheel => {
        html += `<option value = "${wheel.id}">${wheel.name}</option>`
        
    })
    html+=`<select>`

    return html
}