addButton = document.getElementById('addmovie');

addButton.addEventListener('click', function() {
    let movieName = document.getElementById('movietitle')
    let movieList = document.getElementById('movielist')

    let thisMovie = movieName.value
    let newListItem = document.createElement('li')
    
    newListItem.innerHTML = thisMovie
    movieList.append(newListItem)

})