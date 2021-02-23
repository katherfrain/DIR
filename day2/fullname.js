let submitName = document.getElementById('submitName')
let lastText = document.getElementById('lastname')
let firstText = document.getElementById('firstname')

let spaceForName = document.getElementById('namespace')

submitName.addEventListener('click', function() {
    spaceForName.innerHTML = firstText.value + " " + lastText.value
})