import { Factory } from "./Factory.js"

const mainContent= document.querySelector("#content")


const renderHTML = () =>{
    mainContent.innerHTML= Factory()
}

renderHTML()

document,addEventListener("stateChanged", event => {
    console.log("State has changed. Regenerating HTML...")
    renderHTML()
})