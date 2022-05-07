import React, { useEffect } from "react";
import { makeStyles,Typography } from "@material-ui/core";
import useGetBanner from "../../custom-hooks/useGetBanner";
import {truncate} from '../../utils/Utilidades'
const BannerBase = ({children}) => {
  const classes = useStyles();
  const { movieBanner,loading, error, getBanner } = useGetBanner();

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <header className={classes.banner} style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original${movieBanner?.backdrop_path}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'  }}>
      <div className={classes.banner__content}>
      {children}      
      <Typography variant='h2' component='h1'  className={classes.banner__title}>
          {movieBanner?.title || movieBanner?.name || movieBanner?.original_name}
      </Typography>      
      </div>
      <Typography variant="h6" className={classes.description}
        style={{ wordWrap:"break-word"}}>
          {
              truncate(movieBanner?.overview,160)
          }
        {children}

       
    </Typography>
   

    </header>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    //backgroundImage: `url(${HeroBanner})`,
    position: "relative",
    height: "400px;",
    objetFit: "contain" /*centrada que cubra el total del contenedor*/,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },
  banner:{
    padding: "0",
    width: "auto",
    height: "37vw",
    color: "#fff",
    position: "relative"
  },
  banner__content: {
    padding: "0 3vw",
    height: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingBottom: "2vw",
},
banner__title: {
   padding:"30",
  fontWeight:"800",
  maxWidth: "70rem",
  textShadow: "2px 2px 4px rgba(0,0,0,.25)",
  lineHeight: "1.8"
},

  description: {},
}));

export default BannerBase;
