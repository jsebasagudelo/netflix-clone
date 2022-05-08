import React, { useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import useGetBanner from "../../custom-hooks/useGetBanner";
import { truncate } from "../../utils/Utilidades";
import useStylesBannerBase from "../../styles/components/StyleBannerBase";
const BannerBase = ({ children }) => {
  const classes = useStylesBannerBase();
  const { movieBanner, getBanner } = useGetBanner();

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <header
      className={classes.banner}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movieBanner?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={classes.banner__content}>
        {children}
        <Typography
          variant="h2"
          component="h1"
          className={classes.banner__title}
        >
          {movieBanner?.title ||
            movieBanner?.name ||
            movieBanner?.original_name}
        </Typography>
      </div>
      <Typography variant="h6" className={classes.description}>
        {truncate(movieBanner?.overview, 160)}
        {children}
      </Typography>
    </header>
  );
};

export default BannerBase;
