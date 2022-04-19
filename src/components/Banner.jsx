import React, { useEffect, useState } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import HeroBanner from "../assets/images/netflix.jpeg";
import {truncate} from '../utils/Utilidades'
import axios from  '../Api'
import {base_url}   from  '../utils/constant'
import requests from "../Api/Requests";
import useGetBanner from  '../custom-hooks/useGetBanner'
const Banner = () => {
  const classes = useStyles();
  const [movie,setMovie]=useState({});
 
 useEffect(()=>{

  const fetchDataAxios = async () =>{
    const request= await axios.get(requests.fetchNetflixOriginals)
    //tenemos array de peliculas request.data.results
    // generamos un numero random  entre 0 y la longitud del array,para obetener un indice aleatorio
 

   
    const random=Math.floor(Math.random()* request.data.results.length -1)
    setMovie(request.data.results[random])
    
    return request;
  }

   const getBannerFetch =() => {
    
     fetch(`${base_url}${"/"}${requests.fetchNetflixOriginals}`)
      .then((res) => res.json())
      .then( (res) =>{
        const random=Math.floor(Math.random()* res.results.length -1)
        setMovie(res.results[random])
     })
      .catch( (error) => console.log(error)  )

   }
  //fetchDataAxios();
  getBannerFetch();


  //console.log(movie)

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

const useStyles = makeStyles((theme) => ({
  root: {
   

  },
  buttons:{
     "& button":{
         cursor:"pointer",
         color:"#fff",
         fontWeight:700,
         borderRadius:"5px",
         padding: theme.spacing(1,4,1,4),
         marginRight:"1rem",
         backgroundColor:"rgb(51,51,51,0.5)"
     },
     "& button:hover":{
         color: "#000",
         backgroundColor:"#e6e6e6"
     }
  },
  description:{

  },
  banner:{
    padding: "0",
    width: "auto",
    height: "47vw",
    color: "#fff",
    position: "relative"
  },
  banner__content: {
    padding: "0 3vw",
    height: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingBottom: "2vw",
},
banner__title: {
  fontsize: "4vw",
  fontWeight:"800",
  maxWidth: "70rem",
  textShadow: "2px 2px 4px rgba(0,0,0,.25)"
},
banner__overview:{
  margin: "1vw 0",
  maxWidth: "40vw",
  fontSize: "1.5vw",
  fontWeight: "400",
  lineHeight: "1.4",
  textShadow: "2px 2px 4px rgba(0,0,0,.45)"
},
  content:{
    padding: "0 3vw",
    paddingBottom:"2vw",
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
    justifyContent:"flex-end"
    
    
  },
  fadeBottom:{
    position: "absolute",
    top: "30vh",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage:
      "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)",
  }
}));

export default Banner;
