let movies = [
  { id: 0, name: "Taeyeon", score: 3 },
  { id: 1, name: "Zero", score: 1 },
  { id: 2, name: "Nero", score: 5 },
  { id: 3, name: "Ginger", score: 4 },
  { id: 4, name: "Boogi", score: 3 },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => id === movie.id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
