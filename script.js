/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    return this.budget > 100000000;
  }
}

const movieFirst = new Movie("Pulp Fiction", "Quentin Tarantino", 50000000);

console.log(movieFirst.title);
console.log(movieFirst.director);
console.log(movieFirst.budget);
console.log(
  "Filmo biudžetas didensis nei 100 000 000 mln USD: " +
    movieFirst.wasExpensive()
);

console.log("--------------------------------");

const movieSecond = new Movie(
  "The Hateful Eight",
  "Samuel L. Jackson",
  900000000
);

console.log(movieSecond.title);
console.log(movieSecond.director);
console.log(movieSecond.budget);
console.log(
  "Filmo biudžetas didensis nei 100 000 000 mln USD: " +
    movieSecond.wasExpensive()
);
