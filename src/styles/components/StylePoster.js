import { makeStyles } from "@material-ui/core/styles";

const useStylePoster = makeStyles((theme) => ({
  root: {
  
    
   
  },
  row__title: {
    fontSize: "2vw",
    fontWeight: "500",
    textShadow: "2px 2px 4px rgba(0,0,0,.25)",
    paddingLeft: "3vw",
  },
  cards: {
    position: "relative",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridGap: "1rem",

    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },

    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
  card: {
    border: "0px solid blue",
    display: "inline-block",
    position: "relative",
    "&:hover": {
      "& $info": {
        display: "block",
      },
    },
  },
  info: {
    display: "none",
    position: "absolute",
    bottom: "0",
    /* transform: translateY(15%);*/

    border: "0px solid red",
    left: "3px",

    /* height: 100%;*/
    padding: "0.2em",
    /*pointer-events: none;*/
    transition: "all .4s ease .15s",
    width: "calc(100% - 6px)",

    zIndex: "2",
    borderRadius: "5",
  },
  search: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridGap: "1rem",
    marginTop: "7em",
    background: "#fff",
  },
  search__title: {
    margin: "0",
    fontSize: "16",
    lineHeight: "1.6",
    textAlign: "left",
  },
  search__wrp: {
    margin: "3vh auto 0",
    width: "100%",
  },
  poster: {
    display: "block",
    maxHeight: "12rem",
    objectFit: "contain",
    marginRight: theme.spacing(1),
    transition: "transform 450ms",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  posters: {
    display: "flex",
    flexWrap: "wrap",
  },
  poster__info: {
    position: "absolute",
    left: "3",
    bottom: "0",
    transform: "translateY(15%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    width: "calc(100% - 6px)",
    height: "100%",
    padding: "0.6em",
    opacity: "0",
    zIndex: "2",
    borderRadius: "5px",
    pointerEvents: "none",
    transition: "all .4s ease .15s",
  },
  icon: {
    display: "inline-flex",
    padding: "6px",
    borderRadius: "50%",
    fontSize: "50px",
    cursor: "pointer",
    margin: "0 5px",
    marginBottom: "0.6em",
    background: "transparent",
    color: "#fff",
    border: "0px solid #fff",
    transition: "all 0.3s ease-out",
    outline: "none",
    "&:hover": {
      background: "#f2f2f2",
      color: "#141414",
    },
  },
}));

export default useStylePoster;
