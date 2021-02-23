let redButton = document.getElementById('red')
let blueButton = document.getElementById('blue')


blueButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
})

redButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
})