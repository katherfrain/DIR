let displayAllButton = document.getElementById('getOrders');
let makeOrderButton = document.getElementById('makeOrder');
let orderMenu = document.getElementById('orderSpace');

function newOrderMenu(){
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


makeOrderButton.addEventListener('click', function() {
    newOrderMenu()
})
    let submitNewOrderButton = document.getElementById('submitOrder');

    submitNewOrderButton.addEventListener('click', function() {
        
        let request = new XMLHttpRequest();
        let email = document.getElementById('email').value;
        let type = document.getElementById('type').value;
        let size = document.getElementById('size').value;
        let price = document.getElementById('price').value;
        
        const formattedReq = {
            email: email,
            type: type,
            size: size,
            price: parseFloat(price)
        }
        
        request.addEventListener('load', function() {
        })
        request.open('POST', 'https://troubled-peaceful-hell.glitch.me/orders')
        request.setRequestHeader('Content-Type', 'application/json')
        request.send(JSON.stringify(formattedReq))
    })
