import React, { useEffect, useState } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import propTypes from "prop-types";
import useGetMovies from "../custom-hooks/useGetMovies";
// design pattern: Render Props
const Movie = ({ title, fetchUrl, isLargeRow }) => {
  const classes = useStyles();
  //const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  const { movies, loading, error, getMovies } = useGetMovies(fetchUrl);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.row__title}>{title}</Typography>
      <div className={classes.posters}>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
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
            )
        )}
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    marginLeft: theme.spacing(4),

  },
  row__title:{
    fontSize: "2vw",
    fontWeight: "500",
    textShadow: "2px 2px 4px rgba(0,0,0,.25)",
    paddingLeft: "3vw",
  },
  posters: {
    display: "flex",
    overflowY: "hidden",
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  poster: {
    maxHeight: "12rem",
    objectFit: "contain",
    marginRight: theme.spacing(1),
    transition: "transform 450ms",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  posterLarge: {
    maxHeight: "15rem",
    "&:hover": {
      transform: "scale(1.15)",
    },
  },
}));

Movie.propTypes = {
  title: propTypes.string,
  fetchUrl:propTypes.string,
  isLargeRow:propTypes.string
};

export default Movie;

Movie.displayName = "Movies";
