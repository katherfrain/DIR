const catbox = document.querySelector('#catfacts');

let catasker = new XMLHttpRequest();

catasker.addEventListener('load', function() {
    let catresult = JSON.parse(this.responseText)
    console.log(catresult)

    let catFacts = catresult.map((fact => {
        return `<li>
        ${fact.text}
        </li>`
    }))
    catbox.innerHTML = catFacts.join('');
})

catasker.open('GET', 'https://cat-fact.herokuapp.com/facts');
catasker.send()