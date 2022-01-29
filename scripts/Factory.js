import { Interiors } from "./Interiors.js";
import { Paints } from "./Paints.js";
import { Technologies } from "./Technologies.js";
import { Wheels } from "./Wheels.js";

const mainContent = document.getElementById("content")

const renderHTML = () => {
    return `<main>
    ${Paints()}
    ${Interiors()}
    ${Technologies()}
    ${Wheels()}
    
    </main>`
}

mainContent.innerHTML=renderHTML()


