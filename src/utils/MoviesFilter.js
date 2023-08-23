export const moviesFilter = (data, keyWord, onlyShortFilms) => {
  if (onlyShortFilms) { 
  const result = data.filter((movie) => {
    return (
      (movie.nameRU.toLowerCase().includes(keyWord.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(keyWord.toLowerCase())) && (movie.duration <= 40)
    );
  });
  return result;
} else {
  const result = data.filter((movie) => {
    return (
      movie.nameRU.toLowerCase().includes(keyWord.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(keyWord.toLowerCase())     
    );
  });
    return result;
  }
}