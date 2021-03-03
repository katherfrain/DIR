let stonkSpot = document.getElementById('stonks');
let stonkButton = document.getElementById('getStonks');

stonkButton.addEventListener('click', function () {

    let request = new XMLHttpRequest();

    request.addEventListener('load', function () {

        console.log(this.responseText);
        let rawStonks = JSON.parse(this.responseText);
        let preppedStonks = rawStonks.map((stonk => {
            return `<li> 
        <h1>${stonk.symbol}: ${stonk.title}</h1>
        <p>${stonk.price}/share, at ${stonk.quantity} that works out to $${stonk.price * stonk.quantity}
        </li>`
        }))
        stonkSpot.innerHTML = preppedStonks.join('')
    })


    request.open('GET', 'https://endurable-bead-polo.glitch.me/stocks');
    request.send()
})
