import { Interiors } from "./Interiors.js";
import { Paints } from "./Paints.js";
import { Technologies } from "./Technologies.js";
import { Wheels } from "./Wheels.js";

const mainContent = document.getElementById("content")

const renderHTML = () => {
    return `<main>

    <nav>
        <header id = "pageTitle">Cars R' Us: Personal Car Builder</header>
    </nav>

    <article class = "options">
        <section class = "option">
            ${Paints()}
        </section>
        <section class = "option">
            ${Interiors()}
        </section>
        <section class = "option">
            ${Technologies()}
        </section>
        <section class = "option">
            ${Wheels()}
        </section>
    </article>
    
    </main>`
}

mainContent.innerHTML=renderHTML()


