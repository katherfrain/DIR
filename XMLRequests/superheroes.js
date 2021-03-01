const movieList = document.getElementById('movielist');
const searchButton = document.getElementById('search');
const movieTitle = document.getElementById('movie');

searchButton.addEventListener('click', function () {

    let request = new XMLHttpRequest();


    request.addEventListener('load', function () {
        let rawMovieResults = JSON.parse(this.responseText);
            let movieResults = rawMovieResults.Search.map((movie => {
                return `<li>
                    <h1>${movie.Title}</p>
                    <img src='${movie.Poster}'>
                    <button onclick='getMovieDetails("${movie.imdbID}")'>Show Details</button>
                    <h3 id='description-${movie.imdbID}'></h3>
                    </li>`
            }))
            movieList.innerHTML = movieResults.join('')
        })
    
    request.open('GET', `http://www.omdbapi.com/?s=${movieTitle.value}&apikey=11bbb053`)
    request.send()
  })

  function getMovieDetails(imdbID) {

      let movieDetailRequest = new XMLHttpRequest();
      let stickHere = document.getElementById(`description-${imdbID}`)
      
      movieDetailRequest.open('GET', `http://www.omdbapi.com/?i=${imdbID}&apikey=11bbb053`)
      movieDetailRequest.send()
      
      movieDetailRequest.addEventListener('load', function() {
          const rawDetails = JSON.parse(this.responseText);
          console.log(rawDetails)
          const movieDetail = `<p>Plot: ${rawDetails.Plot}</p>`
          stickHere.innerHTML = movieDetail

      })
  }