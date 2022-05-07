import React, { useState } from "react";
import {  IconButton,Typography } from "@material-ui/core";
import { base_url_Img as base_url } from "../utils/constant";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";

import { useSelector, useDispatch } from "react-redux";
import { setMoviesFavorites } from "../actions/index";
import "../components/styles/App.css";
import useStylePoster from "../styles/components/StylePoster";


import { Link } from "react-router-dom";
const Poster = ({ movies }) => {
  const dispatch = useDispatch();
  const listFavorites = useSelector((state) => state.listFavorites);
  const classes = useStylePoster();
  const [show,setShow]=useState(false)
  const [movie,setMovie]=useState([])
  



  const handleView=(movie) =>{
    setMovie(movie)
    setShow(!show);
  }
  const onClose=() =>{
    setShow(!show);
  }

  return (
    <div className={classes.root}>
     <div className={classes.cards}>
        {movies.map(
          (movie) =>
            movie.backdrop_path && (
              <div className={classes.card} key={movie.id}>
                 <Link  onClick={ () => handleView(movie)}>
                <img
                  key={movie.id}
                  alt={movie.name}
                  className={classes.poster}
                  src={base_url + movie.backdrop_path}
                />
                <div className={classes.info}>
                  <IconButton
                    onClick={() => handleView(movie)}
                    style={{ borderRadius: 0 }}
                  >
                    <AddCircleOutlineRoundedIcon className={classes.icon} />
                  </IconButton>
                 
                </div>
                </Link>
                
              </div>
             
            )
        )}
      </div>
     
    </div>
  );
};

export default Poster;
