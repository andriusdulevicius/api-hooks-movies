import React, { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import axios from 'axios';

function App() {
  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMovieshandler() {
    setIsLoading(true);
    const { data } = await axios.get('https://swapi.dev/api/films');
    console.log(data.results);
    // perdaryti gautus duomenis pagal savo formata
    const moviesTransformed = data.results.map((mv) => ({
      id: mv.episode_id,
      title: mv.title,
      openingText: mv.opening_crawl,
      releaseDate: mv.releaseDate,
    }));
    setMovies(moviesTransformed);
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button disabled={isLoading} onClick={fetchMovieshandler}>
          {isLoading ? 'Loading' : 'Fetch Movies'}
        </button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>No movies at the moment</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
