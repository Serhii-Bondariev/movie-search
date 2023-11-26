// pages/Movies.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();

  const handleSubmit = async value => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            language: 'en-US',
            api_key: '47b0a612b169acf1eb58a4d87a2b2bdd',
            query: value,
          },
        }
      );

      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <h1>Movies Page</h1>
      <SearchForm onSubmit={handleSubmit} />
      <MoviesList movies={searchResults} />
    </div>
  );
};

export default Movies;
