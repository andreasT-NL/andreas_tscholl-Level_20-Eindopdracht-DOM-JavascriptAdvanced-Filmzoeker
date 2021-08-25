
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
        newA.setAttribute('href', 'https://www.imdb.com/title/' + film.imdbID); //attribute for a-tags (href) + ext. link to imdb 
        newA.setAttribute('target', '_blank'); //attribute for a-tags open in new tab
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
addEventListeners();

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
            text = 'other movies';
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

// search movies

const searchMovies = function () {
    const searchField = document.getElementsByName('searchForm'); //select input field
    searchField.addEventListener('keyup', (function (event) { //listens when text inserted
        const userInput = event.target.value.toLowerCase(); //grap content input-field and converting text input to lowercas
        console.log(userInput);

        const filtered_movies = function () {
            movies.filter(function (movie) {
                const movieTitleContainsSearchText = movie.Title.includes(userInput); //grap movie-titles that include input-value
                return movieTitleContainsSearchText;
            });

            if (filtered_movies.toLowerCase().indexOf(userInput) != -1) { //if title search true -> show movies
                return addMoviesToDom(userInput);
            } else {
                filmWrapper.innerHTML = 'No results found';
            }
        };
    }));
};

// const getMoviesBySearch = function () {
//     const searchField = document.getElementsByName('searchForm'); //select input field
//     searchField.addEventListener('keyup', (function (event) {
//         // event.preventDefault();
//         let searchText = capitalizeFirstLetter(searchForm.value);

//         movies.filter(function (movie) {
//             let filtered_movies = movies.filter(function (movie) {
//                 const movieTitleContainsSearchValue = movie.Title.includes(searchText);
//                 return movieTitleContainsSearchValue;
//             });

//             if (filtered_movies) {
//                 getMovies(searchText);
//                 console.log(searchText);
//             } else {
//                 movieWrapper.innerHTML = `No results found with '${searchText}'`
//             }
//         });
//     }));
// };

