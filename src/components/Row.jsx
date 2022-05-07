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


// design pattern: Render Props
const Row = ({ titleMovie, id, fetchUrl, with_genres = 0 }) => {
  const [movies, setMovies] = useState([]);
  const [trailerPath, setTrailerPath] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [original_title, setOriginal_title] = useState("");
  const classes = useStyles();
  
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
          // handleError();
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

    console.log(
      "url:" + fetchUrl + " genero:" + with_genres + " componente:" + id
    );
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
                  style={{ fill: "#fff", fontSize: 40 }}
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

const useStyles = makeStyles((theme) => ({
  root: {
    background:"#111",
    height: "30vh"
  },
  row__title: {
    fontSize: "1.75rem",
    fontWeight: "400",
    textShadow: "2px 2px 4px rgba(0,0,0,.25)",
    paddingLeft: "3vw",
    color:"#fff",
    lineHeight: "1.2"
  },
  row: {
    padding: 0,
    position: "relative",
    margin: "1.5vw 0 2.5vw",
  },
  row__posters: {
    display: "flex",
    justifyContent: "flex-start",
    scrollBehavior: "smooth",
    overflowX: "scroll",
    overflowY: "hidden",
    padding: "1rem 0 1rem 3vw",
  },
  row__poster: {
    width: "auto",
    height: "9vw",
    objectFit: "contain",
    maxHeight: "15rem",
    minHeight: "8rem",
    transition: "transform 0.3s",
    borderRadius: "5px",
    marginRight: "1rem",
    cursor: "pointer",
    transition: "all 0.2s",
 
  },
  info__overlay: {
    position: "fixed",
    content: "",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: "99",
    overflow: "scroll",
  },
  info__overlay__contentBox: {
    position: "absolute",
    top: "8rem",
    left: "50%",
    transform: "translateX(-50%)",
    width: "85rem",
    height: "auto",
    minHeight: "50rem",
    borderRadius: "1rem",
    overflow: "hidden",
    backgroundColor: "#111",
  },
  info__overlay__btnClose: {
    position: "absolute",
    top: 0,
    right: 0,
    border: "none",
    marginTop: "1.5rem",
    marginRight: "1.5rem",
    fontSize: "2rem",
    zIndex: "50",
    cursor: "pointer",
  },
  info__overlay__videoBox: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  info__overlay__youtube: {
    width: "100%",
    height: "47.8rem",
  },
  info__overlay__iconBox: {
    position: "absolute",
    bottom: "4vw",
    left: "3rem",
    display: "flex",
    alignItems: "center",
  },
  info__button: {
    backgroundColor: "rgba(100, 100, 100, 0.5)",
    color: "inherit",
    fontWeight: "500",
    fontFamily: "inherit",
    fontSize: "2rem",
    border: "none",
    padding: "1.5rem 3rem",
    minWidth: "10rem",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    transition: "all 0.1s",
    cursor: "pointer",
  },
  info__button__play: {
    color: "#333",
    backgroundColor: "#fff",
    fontSize: "2rem",
  },
  icon__black__opacity: {
    color: "rgba(32, 32, 32, 0.6)",
  },
  info__overlay__text: {
    padding: "2rem 4rem 4rem",
    color: "#fff",
  },
  pagination: {
    position: "absolute",
    opacity: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100% - 2rem)",
    width: "3vw",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    transition: "opacity 0.2s",
    zIndex: "10",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  },
  pagination__right: {
    right: 0,
    top: "1rem",
  },
  pagination__left: {
    left: 0,
    top: "1rem",
  },
}));

// Component Documentation
Row.propTypes = {
  titleMovie: propTypes.string,
  id: propTypes.string,
  fetchUrl: propTypes.string,
};

export default Row;

// Alias Component in the browser
Row.displayName = "Row Movie";
