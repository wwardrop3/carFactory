import { getTech, setTech } from "./database.js"

//returns array of tech data
const technologies = getTech()


document.addEventListener(
    "change",
    (changeEvent) => {
        if(changeEvent.target.id === "techOption") {
            console.log(changeEvent.target)
            setTech(parseInt(changeEvent.target.value))
        }
        

    }
)
//define function that returns a header and dropdown list of technology options
export const Technologies = () =>{
    let html = `<h2>Technologies</h2>`
    html+=`<select id = "techOption">`

    //iterate through the technologies array and return a mapped array that contains html options for each technology
    const listItemsArray = technologies.map(
        (technology) => {
            html+=`<option value = "${technology.id}">${technology.name}</option>`
        }
    )
    //join each html option created in the list items array into one html string
    html += listItemsArray.join("")
    html+= `</select>`
    return html

}


//add event listener that notices change in dropdown and saves the new value into the temp customOrder array in database

