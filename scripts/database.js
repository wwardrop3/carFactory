const database = {
    paintColors: [
        {
            id: 1,
            name: "Spring Green",
            price: 200.00,
        },
        {
            id: 2,
            name: "Silver",
            price: 300.50,
        },
        {
            id: 3,
            name: "Midnight Blue",
            price: 350.00,
        },
        {
            id: 4,
            name: "Firebrick Red",
            price: 125.25,
        },
    ],
    interiors: [
        {
            id: 1,
            name: "Beige Fabric",
            price: 400.00,
        },
        {
            id: 2,
            name: "Charcoal Fabric",
            price: 450.50,
        },
        {
            id: 3,
            name: "White Leather",
            price: 1350.00,
        },
        {
            id: 4,
            name: "Black Leather",
            price: 1005.25,
        },
    ],
    technologies: [
        {
            id: 1,
            name: "Basic Package (basic sound system)",
            price: 2000.00,
        },
        {
            id: 2,
            name: "Navigation Package (includes integrated navigation controls)",
            price: 2500.00,
        },
        {
            id: 3,
            name: "Visibility Package (includes side and reat cameras",
            price: 3500.00,
        },
        {
            id: 4,
            name: "Ultra Package (includes navigation and visibility packages)",
            price: 5500.00,
        },
    ],
    wheels: [
        {
            id: 1,
            name: "17-inch Pair Radial",
            price: 300.00,
        },
        {
            id: 2,
            name: "17-inch Pair Radial Black",
            price: 400.00,
        },
        {
            id: 3,
            name: "18-inch Pair Spoke Silver",
            price: 850.00,
        },
        {
            id: 4,
            name: "18-inch Pair Spoke Black",
            price: 1250.00,
        },
    ],
    orders: [
        {
            id: 1,
            colorId: 4,
            techId: 2,
            wheelId: 3,
            interiorId:1,
            totalPrice: 400,

        }
    ],
    customOrder: {

    },
}

//create get functions to export all arrays of data

export const getPaintColors = () => {
    return database.paintColors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTech = () => {
    return database.technologies.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}

export const setPaintColors = (id) => {
    database.customOrder.colorId = id
}

export const setInteriors = (id) => {
    database.customOrder.interiorId = id
}

export const setWheels = (id) => {
    database.customOrder.wheelId = id
}

export const setTech = (id) => {
    database.customOrder.techId = id
}


//function to add the temp customOrder data into the orders array
export const addPurchase = () =>{
    //find the last index of existing orders
    const lastIndex = database.orders.length -1

    //find the id value of the last index
    const newId = database.orders[lastIndex].id +1

    //set custom order id to the new value
    database.customOrder.id = newId

    //add custom order to the orders array
    database.orders.push(database.customOrder)

    //reset custom order
    database.customOrder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}

