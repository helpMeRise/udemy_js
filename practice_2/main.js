"use strict";



let numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели`, ``);

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for ( let i = 0; i < 2; i++ ) {
  let film = prompt(`Один из последних просмотреных фильмов?`, ``),
    score = prompt(`На сколько оцените его?`);


  if ( film != null && score !=null && film != '' && score != '' && film.length < 50 ) {
    personalMovieDB.movies[film] = score;
  } else {
    i--;
  }

   
}


if ( personalMovieDB.count < 10 ) {
  console.log(`Просмотрено довольно мало фильмов`);
} else if ( personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
    console.log(`Вы классический зритель`);
  } else if ( personalMovieDB.count > 30 ) {
    console.log(`Вы киноман`);
  } else {
    console.log(`Произошла ошибка`);
  }




// let i = 0;

// while ( i < 2 ) {
//   let film = prompt(`Один из последних просмотреных фильмов?`, ``),
//     score = prompt(`На сколько оцените его?`);

//    personalMovieDB.movies[film] = score;
//    i++;
// }  



// do {
//   let film = prompt(`Один из последних просмотреных фильмов?`, ``),
//     score = prompt(`На сколько оцените его?`);

//    personalMovieDB.movies[film] = score;
//    i++;
// }
// while ( i < 2 );

console.log(personalMovieDB);