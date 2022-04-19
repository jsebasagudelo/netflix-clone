import React from "react";
import propTypes from "prop-types";
import { Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStylesMovieList from  '../styles/styles'
// design pattern: Render Props
const MovieList = ({ title = "", isLargeRow = "", data, id }) => {
  const classes = useStylesMovieList();
  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div className={classes.root}>
      <Typography variant="h4">{title}</Typography>
      <div className={classes.posters}>
        {data.map(
          (movie, i) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <div key={i}>
                 <Link to={`${"/detail/"}${movie.id}`}  >
                <img
                  className={`${classes.poster} ${
                    isLargeRow && classes.posterLarge
                  }`}
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie?.backdrop_path
                  }`}
                  alt={movie?.name}
                />
                </Link>
              </div>
            )
        )}
      </div>
    </div>
  );
};


MovieList.propTypes = {
  title: propTypes.string,
  data: propTypes.array,
  isLargeRow: propTypes.string,
};

export default MovieList;

// Alias Component in the browser
MovieList.displayName = "MovieList";
