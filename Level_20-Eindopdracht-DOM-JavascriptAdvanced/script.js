//load all movies to DOM
const addMoviesToDom = function (films) {
    const filmWrapper = document.querySelector('#filmWrapper');
    filmWrapper.innerHTML = ''; //clear li-elements
    // create li-elements in <main>
    films.forEach(function (film) {
        const newLi = document.createElement('li'); //create li-tag
        const newA = document.createElement('a'); //create a-tag
        const newImg = document.createElement('img'); //create img-tag
        newLi.setAttribute('class', 'movie-list'); //class attribute for li-tags
        newA.setAttribute('href', film.Poster); //attribute (href) for a-tags
        newImg.src = film.Poster;
        filmWrapper.appendChild(newLi); //add li-element
        newLi.append(newA); //add a href element
        newA.append(newImg); //add image
    });
};

//eventlisteners buttons
const addEventListeners = function () {
    const filterButtons = document.getElementsByName('filter'); //select all buttons
    //click-event for each button 
    filterButtons.forEach(function (button) {
        button.addEventListener('change', function (event) {
            handleOnChangeEvent(event.target.value); //fire switch (rules for filter buttons)
            // console.log(button)
        });
    });
};

const handleOnChangeEvent = function (event) {
    switch (event) {
        case 'nieuwste':
            filterLatestMovies();
            console.log('nieuwste films');
            break;
        case 'avengers':
            filterMovies('Avengers');
            console.log('avengers films')
            break;
        case 'x-men':
            filterMovies('X-Men');
            console.log('x-men films')
            break;
        case 'princess':
            filterMovies('Princess');
            console.log('princess films');
            break;
        case 'batman':
            filterMovies('Batman');
            console.log('batman films');
            break;

        default:
            text = "other movies";
    };
};

//filter movies by titles
const filterMovies = function (wordInMovieTitle) {
    const filteredMovies = movies.filter(function (movie) {
        return movie.Title.includes(wordInMovieTitle);
    });
    return addMoviesToDom(filteredMovies);
};

// filter movies >= year 2014
const filterLatestMovies = function () {
    const recentMovie = movies.filter(function (movie) {
        return movie.Year >= 2014;
    });
    return addMoviesToDom(recentMovie);
};

addEventListeners();
