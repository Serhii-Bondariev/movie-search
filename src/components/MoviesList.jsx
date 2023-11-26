// components/MoviesList.js
import React from 'react';

const MoviesList = ({ movies }) => {
  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          {/* Додайте інші дані про фільм за потребою */}
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
