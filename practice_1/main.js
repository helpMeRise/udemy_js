

let numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели`, ``);

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let question1 = prompt(`Один из последних просмотреных фильмов?`, ``),
    question2 = prompt(`Один из последних просмотреных фильмов?`, ``),
    question3 = prompt(`На сколько оцените его?`),
    question4 = prompt(`На сколько оцените его?`);

personalMovieDB.movies[question1] = question3;
personalMovieDB.movies[question2] = question4;

console.log(personalMovieDB.movies);