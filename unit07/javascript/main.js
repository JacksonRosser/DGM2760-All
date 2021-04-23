let message
let shoppingList
//creating pizza object with default properites and two methods

const pizza = {
    crust: 'thin',
    size: 'small',
    topping: 'pepperoni',
    buildPizza: function () {
        console.log('build pizza method has been called')
        message = `Baking a <span>${pizza.size}</span> pizza on a <span>${pizza.crust}</span> crust with <span>${pizza.topping}</span>, marinara, and cheese just for you!`
        //message display
        document.querySelector('#feedback').innerHTML = message
    },
    buildShoppingList: function () {
        let flour = 1
        let cheese = 1
        let topping = 1
        if (pizza.crust === 'thick') flour *= 2 
        if (pizza.size === "large") flour *= 2, cheese *=2, topping *= 2

        shoppingList = `If you want to make your pizza at home you will need <span>${flour}</span> bag(s) of flour, <span>${topping}</span> lb(s) of <span>${pizza.topping}</span>, <span>${cheese}</span> cup(s) of cheese, a <span>${pizza.size}</span> can of sauce, and a <span>${pizza.size}</span> baking pan`
        document.querySelector('#feedback').innerHTML = shoppingList
    }
}

//set pizza crust by buttons
document.querySelector("#thin").addEventListener('click', () => pizza.crust = 'thin')
document.querySelector("#thick").addEventListener('click', () => pizza.crust = 'thick')
//set pizza size by buttons
document.querySelector("#small").addEventListener('click', () => pizza.size = "small")
document.querySelector("#large").addEventListener('click', () => pizza.size = "large")
//set pizza topping by buttons
document.querySelector("#pepperoni").addEventListener('click', () => pizza.topping = "pepperoni")
document.querySelector("#pineapple").addEventListener('click', () => pizza.topping = "pineapple")



//build pizza button
document.querySelector('#build').addEventListener('click', pizza.buildPizza)

//build shopping list button
document.querySelector('#shopping').addEventListener('click', pizza.buildShoppingList)


