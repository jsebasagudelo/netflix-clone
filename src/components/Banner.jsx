import React, { useEffect, useState } from "react";
import {Typography } from "@material-ui/core";
import {truncate} from '../utils/Utilidades'
import axios from  '../Api'
import requests from "../Api/Requests";

import useStyleBanner from "../styles/components/StyleBanner";
const Banner = () => {
  const classes = useStyleBanner();
  const [movie,setMovie]=useState({});
  
   
 useEffect(()=>{

  const fetchDataAxios = async () =>{
    const request= await axios.get(requests.fetchNetflixOriginals)
    const random=Math.floor(Math.random()* request.data.results.length -1)
     setMovie(request.data.results[random]); 
    return request;
  }

   

   fetchDataAxios();




 },[] )
 
 
 
  return (
    <>
    <header className={classes.banner} style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'  }}>
    
    <div className={classes.banner__content}>
    <Typography variant='h2' component='h1' className={classes.banner__title}>
          {movie?.title || movie?.name || movie?.original_name}
        </Typography>
        <Typography variant="h6" className={classes.banner__overview}
        style={{ wordWrap:"break-word"}}>
          {
              truncate(movie?.overview,160)
          }
       
        </Typography>
    </div>
    </header>
    </>
  );
};


export default Banner;
