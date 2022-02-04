//module creates purchase list html and creates new orders

import { getOrders, getPaintColors, getWheels, getInteriors, getTech, addPurchase } from "./database.js"





//define function that takes in a purchase object and produces an html element to display with color, wheels, interior, tech, and total cost
const orderBuilder = (orderObject) => {
    let totalPrice = 0
    const colors = getPaintColors()
    const wheels = getWheels()
    const interiors = getInteriors()
    const technologies = getTech()

    //get price of each element
    const foundColor = colors.find(color => {
        return color.id === parseInt(orderObject.colorId)})
    const colorPrice = foundColor.price
    totalPrice += colorPrice

    const foundWheel = wheels.find(wheel => {
        return wheel.id === parseInt(orderObject.wheelId)
    })
    const wheelPrice = foundWheel.price
    totalPrice+=wheelPrice

    const foundInterior = interiors.find(interior => {
        return interior.id === orderObject.interiorId
    })
    const intriorPrice = foundInterior.price
    totalPrice+=intriorPrice

    const foundTech = technologies.find(tech => {
        return tech.id === orderObject.techId
    })
    const techPrice = foundTech.price
    totalPrice+=techPrice

    const costString = totalPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    
    return `${foundColor.name} with ${foundWheel.name} wheels, ${foundInterior.name}, and ${foundTech.name} for a total cost of ${costString}`

}


//function that returns all of the orders in the purchases array as strings to be shown below the order button
export const Orders = () => {
    const orders = getOrders()
    let html = ""

    const orderList = orders.map(order => {
        orderBuilder(order)
    })

    const orderElement = orderList.join("")

    html+= orderElement
    return html

}
