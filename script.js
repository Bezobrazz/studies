const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("На сколько его оцените?", ""),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = prompt("На сколько его оцените?", "");

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;
