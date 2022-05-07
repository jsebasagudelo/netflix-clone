import { makeStyles } from "@material-ui/core";


const useStylesMovieList = makeStyles((theme) => ({
    root: {
      color: "#fff",
      marginLeft: theme.spacing(1),
    },
    posters: {
      display: "flex",
      overflowY: "hidden",
      overflowX: "scroll",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    poster: {
      maxHeight: "12rem",
      objectFit: "contain",
      marginRight: theme.spacing(1),
      transition: "transform 450ms",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    posterLarge: {
      maxHeight: "15rem",
      "&:hover": {
        transform: "scale(1.15)",
      },
    },
  }));
export default useStylesMovieList