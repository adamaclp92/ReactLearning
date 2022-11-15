import React from 'react';
import MovieModel from '../models/movieModel';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList: React.FC<{movies: MovieModel[]}> = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          id={movie.id}
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
