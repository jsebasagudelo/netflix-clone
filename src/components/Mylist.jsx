import React, { useState } from "react";
import movieTrailer from "movie-trailer";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import { base_url_Img as base_url } from "../utils/constant";
import YouTube from "react-youtube";
import "../components/styles/row.css";
import { useSelector } from "react-redux";
import useStyleMyList from "../styles/components/StyleMylist";
import Layout from "../containers/Layout";
const Mylist = () => {
  const classes = useStyleMyList();
  const [trailerPath, setTrailerPath] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [original_title, setOriginal_title] = useState("");
  const {movie} =useSelector( (state) =>({...state}) )

  
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

  const opts = {
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      controls: 0,
    },
  };

  return (
    <Layout>


    <div className={classes.root}>
        <div className={classes.espacio}></div>
     
      <div className="row">
        <div className={`row__posters row__posters--${25}`}>
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
          { movie.listFavorites.map((movie) => {
             
            return (
                 (movie.backdrop_path)&&
                ( <img
                  key={movie.id}
                  className={classes.row__poster}
                  src={base_url + movie.backdrop_path}
                  alt={movie.name}
                  onClick={() => handleClick(movie)}
                />)
             
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
    </Layout>
  );
};


export default Mylist;
