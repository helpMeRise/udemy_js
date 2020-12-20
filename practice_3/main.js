"use strict";



let numberOfFilms;

function start() {
  numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели`, ``);

  while (numberOfFilms == `` || numberOfFilms == null || isNaN(numberOfFilms) ) {
    numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели`, ``);
  }
}

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function showMyDB() {
  if ( personalMovieDB.privat == false ) {
    console.log(personalMovieDB);
  }
}

showMyDB();

function writeYourGenres() {
  for ( let i = 0; i < 3; i++ ) {
    let a = prompt(`Ваш любимый жанр под номером ${i}`);

    personalMovieDB.genres[i] = a;

  }
}

writeYourGenres();



function rememberMyFilms() {
  for ( let i = 0; i < 2; i++ ) {
    let film = prompt(`Один из последних просмотреных фильмов?`, ``),
      score = prompt(`На сколько оцените его?`);
  
  
    if ( film != null && score !=null && film != '' && score != '' && film.length < 50 ) {
      personalMovieDB.movies[film] = score;
    } else {
      i--;
    }  
  }
}

rememberMyFilms();


function detectPersonalLevel() {
  if ( personalMovieDB.count < 10 ) {
    console.log(`Просмотрено довольно мало фильмов`);
  } else if ( personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
      console.log(`Вы классический зритель`);
    } else if ( personalMovieDB.count > 30 ) {
      console.log(`Вы киноман`);
    } else {
      console.log(`Произошла ошибка`);
    }
}

detectPersonalLevel();



console.log(personalMovieDB);