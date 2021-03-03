let makeOrderButton = document.getElementById('makeOrder');
let orderMenu = document.getElementById('orderSpace');
let displayAllButton = document.getElementById('getOrders');

//NEW ORDER
function newOrderMenu() {
    orderMenu.innerHTML = `
    <label> Email:
    <input id='email'>
    <label> Type: 
    <input id='type'>
    <label> Size:
    <input id='size'>
    <label> Price:
    <input id='price'>`
}

makeOrderButton.addEventListener('click', function () {
    newOrderMenu()
})

let submitNewOrderButton = document.getElementById('submitOrder');

//DISPLAY ORDERS
function getAllPosts(location) {
    fetch('https://troubled-peaceful-hell.glitch.me/orders/')
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            let jsonMapped = json.map((coffee) => {
                return `<li>${coffee.email} got a ${coffee.size} ${coffee.type} for $${coffee.price}</li>`
            })
            return jsonMapped
        })
        .then((jsonMapped) => {
            location.innerHTML = jsonMapped.join('')
        })
        .catch((response) =>{
            console.error(response)
        })
}

displayAllButton.addEventListener('click', function () {
    console.log('hello');
    let orderList = document.getElementById('orderList');
    getAllPosts(orderList)
})
