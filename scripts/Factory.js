import { Interiors } from "./Interiors.js";
import { Paints } from "./Paints.js";
import { Technologies } from "./Technologies.js";
import { Wheels } from "./Wheels.js";
import { Orders } from "./Orders.js"
import { addPurchase } from "./database.js";

document.addEventListener(
    "click",
    (event) => {
        if(event.target.id = "orderButton"){
            addPurchase()
        }

    }
)


//this function will output the page html 
export const Factory = () => {
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
    
    <article>
        <button id = "orderButton">Place Car Order</button>
        <div id = "orders">Custom Car Orders</div>
    </main>`
}

