import React from 'react';

import classes from './Movie.module.css';

const Movie = ({ movie }) => {
  return (
    <li className={classes.movie}>
      <h2>{movie.title}</h2>
      <h3>{movie.releaseDate}</h3>
      <p>{movie.openingText}</p>
    </li>
  );
};

export default Movie;
