export const moviesFilter = (data, keyWord, onlyShortFilms) => {
  if (!data) {
    return
  } else if (!keyWord && !onlyShortFilms) {
    return data
  }  else if (!keyWord) {
    const result = data.filter((movie) => {
      return (movie.duration <= 40);
    })
    return result;
  } else if  (onlyShortFilms) { 
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