// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map((movie) => movie.director);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const filteredMovies = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return filteredMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const total = moviesArray.reduce((accumulator, movie) => {
    if (typeof movie.score === "number") {
      return accumulator + movie.score;
    } else {
      return accumulator;
    }
  }, 0);
  const average = total / moviesArray.length;
  return Math.round(average * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let count = 0;
  const total = moviesArray.reduce((accumulator, movie) => {
    if (typeof movie.score === "number" && movie.genre.includes("Drama")) {
      count++;
      return accumulator + movie.score;
    } else {
      return accumulator;
    }
  }, 0);
  if (count === 0) {
    return 0;
  }
  const average = total / count;
  return parseFloat(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedArray = moviesArray.slice().sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return sortedArray;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map((movie) => movie.title);
  const sortedTitles = titles.sort((a, b) => a.localeCompare(b));
  const topTwentyTitles = sortedTitles.slice(0, 20);
  return topTwentyTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
