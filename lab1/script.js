
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}
};

for (let i = 0; i < 2; i++) {
    let movieName;
    let movieRating;

    while (true) {
        movieName = prompt('Один из последних просмотренных фильмов?');
        if (movieName && movieName.length <= 50) {
            break; 
        } else {
            alert('Введите корректное название фильма (не пустое и не длиннее 50 символов).');
        }
    }


    while (true) {
        movieRating = prompt('На сколько оцените его?');
        if (movieRating) {
            break; 
        } else {
            alert('Введите оценку (не пустую строку).');
        }
    }


    personalMovieDB.movies[movieName] = movieRating;
}


console.log(personalMovieDB);