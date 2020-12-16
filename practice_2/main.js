"use strict";



let numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели`, ``);

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// let question1 = prompt(`Один из последних просмотреных фильмов?`, ``),
//     question2 = prompt(`Один из последних просмотреных фильмов?`, ``),
//     question3 = prompt(`На сколько оцените его?`),
//     question4 = prompt(`На сколько оцените его?`);



for ( let i = 0; i < 2; i++ ) {
  let film = prompt(`Один из последних просмотреных фильмов?`, ``),
    score = prompt(`На сколько оцените его?`);

    personalMovieDB.movies[film] = score;
}


console.log(personalMovieDB.movies);