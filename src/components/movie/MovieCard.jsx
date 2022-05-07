import propTypes from "prop-types";
import React, { useState } from "react";
import { PlayArrow, Info, Add } from "@material-ui/icons";
import { Grid, Card, CardActions, Typography } from "@material-ui/core";
import { base_url_Img as base_url } from "../../utils/constant";
import ModalInfo from "../ui/ModalInfo";
import { useDispatch } from "react-redux";
import { setMoviesFavorites } from "../../actions/index";
import useStyleMovieCard from "../../styles/components/StylesMovieCard";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";

const MovieCard = ({ movie, poster = "" }) => {
  const classes = useStyleMovieCard();
  const [trailerPath, setTrailerPath] = useState("");
  const [description, setDescription] = useState("");
  const [titlemovie, setTitle] = useState("");
  const [original_title, setOriginal_title] = useState("");
  const { backdrop_path, poster_path, title, name } = movie;
  const [modalShow, setModalShow] = useState(false);
  const [modalShowVideo, setModalVideo] = useState(false);
  const dispatch = useDispatch();
  const onClose = () => {
    setModalShow(false);
  };
  const onShow = () => {
    setModalShow(true);
  };
  const addMyList = () => {
    dispatch(setMoviesFavorites(movie));
  };

  const onCloseVideo = () => {
    setModalVideo(false);
  };
  const onShowVideo = () => {
    setModalVideo(true);
  };


  const opts = {
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      controls: 0,
    },
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
      setModalVideo(true);
    };
   


  return (
    <Card className={poster ? classes.poster__root : classes.root}>
      <div
        className={classes.img}
        style={{
          backgroundImage: backdrop_path
            ? `url(${base_url}${poster ? poster_path : backdrop_path})`
            : poster_path
            ? `url(${base_url}${poster_path})`
            : null,
        }}
        onClick={onShow}
      >
        {!backdrop_path && !poster_path && (
          <Typography variant="body2" align="center">
            {title ? title : name}
          </Typography>
        )}
      </div>
      <CardActions className={classes.actions}>
        <Grid container spacing={1}>
          <Grid item>
            <PlayArrow color="secondary" className={classes.btn} onClick={() => handleClick(movie) } />
          </Grid>
          <Grid item>
            <Info className={classes.btn} onClick={onShow} />
          </Grid>
          <Grid item>
            <Add
              color="secondary"
              className={classes.btn}
              onClick={addMyList}
            />
          </Grid>
        </Grid>
      </CardActions>
      <ModalInfo show={modalShow} onClose={onClose} movie={movie} />
    
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
         
        )
       
        }
     
     

    </Card>
  );
};


MovieCard.propTypes = {
  movie: propTypes.array,
};

export default MovieCard;
