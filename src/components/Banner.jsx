import React, { useEffect, useState } from "react";
import {useDispatch,useSelector} from  'react-redux'
import {Typography } from "@material-ui/core";
import {truncate} from '../utils/Utilidades'
import axios from  '../Api'
import {base_url}   from  '../utils/constant'
import requests from "../Api/Requests";
import {setMovies} from  '../actions';
import useStyleBanner from "../styles/components/StyleBanner";
const Banner = () => {
  const classes = useStyleBanner();
  const [movie,setMovie]=useState({});
  const dispatch=useDispatch();
  const list=useSelector(state => state.list);

 
 useEffect(()=>{

  const fetchDataAxios = async () =>{
    const request= await axios.get(requests.fetchNetflixOriginals)
    //tenemos array de peliculas request.data.results
    // generamos un numero random  entre 0 y la longitud del array,para obetener un indice aleatorio
 

   
    const random=Math.floor(Math.random()* request.data.results.length -1)
     setMovie(request.data.results[random]);
   

    
    return request;
  }

   const getBannerFetch =() => {
    
     fetch(`${base_url}${"/"}${requests.fetchNetflixOriginals}`)
      .then((res) => res.json())
      .then( (res) =>{
        const random=Math.floor(Math.random()* res.results.length -1)
        setMovie(res.results[random])
       dispatch(setMovies(res.results[random]))
      
     })
      .catch( (error) => console.log(error)  )

   }

  getBannerFetch();




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
