const dogbox = document.getElementById('dogbox');
const dogbutton = document.getElementById('getdog');

dogbutton.addEventListener('click', function () {

    let dogasker = new XMLHttpRequest();

    dogasker.addEventListener('load', function () {
        let dogpic = JSON.parse(this.responseText);
        let dogimage = `<img src='${dogpic.message}'>`
    
        dogbox.innerHTML = dogimage

        console.log(dogpic)
        console.log('MOO')
    })
    dogasker.open('GET', 'https://dog.ceo/api/breeds/image/random')
    dogasker.send()

})

