import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import propTypes from "prop-types";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import axios from "../Api";
import "../components/styles/row.css";
import { base_url_Img as base_url } from "../utils/constant";
import useStyleRow from '../styles/components/StyleRow';

// design pattern: Render Props
const Row = ({ titleMovie, id, fetchUrl, with_genres = 0 }) => {
  const [movies, setMovies] = useState([]);
  const [trailerPath, setTrailerPath] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [original_title, setOriginal_title] = useState("");
  const classes = useStyleRow();
  
  const handlePagination = (e) => {
    const el = e.target.parentElement.className.split(" ");
    const scrollContainer = document.querySelector(`.${el[1]}`);

    if (e.target.className === "pagination pagination--right") {
      scrollContainer.scrollLeft += scrollContainer.offsetWidth;
    } else {
      scrollContainer.scrollLeft -= scrollContainer.offsetWidth;
    }
  };
  const handleClick = (movie) => {
    
    if (trailerPath === "") {
      movieTrailer(
        movie?.name ||
          movie?.title ||
          movie?.original_name ||
          movie?.original_title
      )
        .then((response) => {
          const path = response.split("?v=")[1];
          console.log(JSON.stringify(response));
          setTrailerPath(path);
          document.querySelector("body").style.overflow = "hidden";
          setDescription(movie?.overview);
          setTitle(movie?.name || movie?.title);
          setOriginal_title(movie?.original_name);
        })
        .catch((error) => {
        
          console.log(error);
        });
    } else {
      setTrailerPath("");
      setDescription("");
      setTitle("");
      setOriginal_title("");
      document.querySelector("body").style.overflow = "auto";
    }
  };

  useEffect(() => {
    fetchUrl =
      with_genres != 0
        ? `${fetchUrl}${"&with_genres="}${with_genres}${"&sort_by=vote_average.desc&vote_count.gte=20"}`
        : fetchUrl;

   
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
   
  }, [fetchUrl + with_genres]);



  const opts = {
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      controls: 0,
    },
  };

  return (
    
    <div className={classes.root}>
      <h2 className={classes.row__title}>{titleMovie}</h2>
      <div className="row">
        <div className={`row__posters row__posters--${id}`}>
          <span
            className="pagination pagination--left"
            onClick={(e) => handlePagination(e)}
          >
            <ChevronLeftIcon />
          </span>
          <span
            className="pagination pagination--right"
            onClick={(e) => handlePagination(e)}
          >
            <ChevronRightIcon />
          </span>
          {movies.map((movie) => {
            return (
              movie.backdrop_path && (
                <img
                  key={movie.id}
                  className={classes.row__poster}
                  src={base_url + movie.backdrop_path}
                  alt={movie.name}
                  onClick={() => handleClick(movie)}
                />
              )
            );
          })}
        </div>

        {trailerPath && (
          <div
            className={classes.info__overlay}
            onClick={() => handleClick(null)}
          >
            <div
              className={classes.info__overlay__contentBox}
              onClick={(e) => e.stopPropagation()}
            >
              <span
                onClick={() => handleClick(null)}
                className={classes.info__overlay__btnClose}
              >
                <HighlightOffRoundedIcon
                    className={classes.info__overlay__btnClose}
                />
              </span>
              <div className={classes.info__overlay_videoBox}>
                <YouTube
                  className={classes.info__overlay__youtube}
                  videoId={trailerPath}
                  opts={opts}
                  title={"string"}
                />
                <div className={classes.info__overlay__iconBox}></div>
              </div>
              <div className={classes.info__overlay__text}>
                <h1>{title}</h1>
                <h2>{original_title ? `(${original_title})` : ""}</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};



// Component Documentation
Row.propTypes = {
  titleMovie: propTypes.string,
  id: propTypes.string,
  fetchUrl: propTypes.string,
};

export default Row;

// Alias Component in the browser
Row.displayName = "Row Movie";
