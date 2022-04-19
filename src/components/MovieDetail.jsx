import React, { useEffect, useState } from "react";
import {
  Typography,
  makeStyles,
  CircularProgress,
  Box,
  Paper,
  ButtonBase,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { getMovie } from "../Api/movieapi";
import { truncate } from "../utils/Utilidades";
import Banner from "./Banner";
import Grid from "@material-ui/core/Grid";
const MovieDetail = (props) => {
  let { id } = useParams();
  const [movieId, setMovieId] = useState(id);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieId();
  }, []);

  const getMovieId = async () => {
    const result = await getMovie(movieId); // Get pokemons list

    setMovie(result.data);
    console.log(JSON.stringify(result.data));
  };

  const classes = useStyles();
  return (
    <>
     <Header/>
     <div className={classes.espacio}>

     </div>
      <div className={classes.root}>    
     
        <div  className={classes.paper} >
         
          <Grid container spacing={10}>
            <Grid item>
              <header
                className={classes.banner}
                style={{
                  backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "450px",
                  width: "400px",
                  borderRadius:"2px"
                }}
              ></header>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    variant="h6"
                    component="h1"
                    className={classes.banner__title}
                  >
                    {movie?.title || movie?.name || movie?.original_name}
                  </Typography>
                  <Typography variant="h6" color="inherit">
                    Votacion {movie?.vote_count}
                  </Typography>
                  <Typography variant="h4" color="inherit">
                 
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <Box position="relative" display="inline-flex">
                      <CircularProgress
                        variant="determinate"
                        value={movie.vote_average}
                        style={{ color: "white" }} 
                      />
                      
                      <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography
                          variant="caption"
                          component="div"
                          color="textSecondary" className={classes.paper}
                        >{`${Math.round(8, 6)}%`}</Typography>
                      </Box>
                    </Box>
                  </Typography>
                  <Typography variant="h6" className={classes.banner__overview}
        style={{ wordWrap:"break-word"}}>
          {
              truncate(movie?.overview,)
          }
       
        </Typography>
                </Grid>
               
              </Grid>
             
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {  
    backgroundColor: "#111",
    width: "100vw",
    height: "100vw",
    overFlowy: "hidden"
  },
  colorPrimary: {
    backgroundColor: "#FD8907",
  },
  espacio: {
    height: "5vw",
    background: "#111",
  },
  banner: {
    padding: "0",

    height: "27vw",
    color: "#fff",
    background: "#111",
    marginTop: "50",
    marginLeft:theme.spacing(5),
   
  },
  paper:{
    
    background: "#111",
    color: "#fff",
    
  
   
  },
  banner__content: {
    padding: "0 3vw",
    height: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingBottom: "2vw",
    width: "100vw",
    height: "100vw",
  },
  banner__title: {
    //fontWeight:"800",
    //maxWidth: "20rem",
    //textShadow: "2px 2px 4px rgba(0,0,0,.25)"
  },
  banner__overview: {
    margin: "1vw 0",
    maxWidth: "40vw",
    fontSize: "1.5vw",
    fontWeight: "400",
    lineHeight: "1.0",
    textShadow: "2px 2px 4px rgba(0,0,0,.45)",
  },
  image: {},
  puntuacion: {
    display: "flex",
  },
  poster: {
    paddingTop: "50",
    minWidth: "300",
    height: "450",
    minHeight: "300",

    marginLeft: theme.spacing(2),
    flexDirection: "column",

    paddingBottom: "2vw",

    "& img": {},
  },
}));
export default MovieDetail;
