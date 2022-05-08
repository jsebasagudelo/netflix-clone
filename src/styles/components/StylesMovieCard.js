import { makeStyles } from "@material-ui/core";


const useStyleMovieCard = makeStyles((theme) => ({
    root: {
      height: "200px",
      [theme.breakpoints.down("lg")]: { height: "160px" },
      [theme.breakpoints.down("md")]: { height: "155px" },
      [theme.breakpoints.down("sm")]: { height: "140px" },
      [theme.breakpoints.down("xs")]: { height: "120px" },
      position: "relative",
  
      "&.MuiPaper-rounded": {
        borderRadius: "0",
      },
  
      "& .MuiCardActions-root": {
        position: "absolute",
        bottom: 0,
        padding: "6px 4px 0",
        background: "#303030cf",
      },
  
      "&.MuiSkeleton-root": {
        backgroundColor: "rgb(255 255 255 / 14%)",
      },
    },
    poster__root: {
      height: "400px",
      [theme.breakpoints.down("lg")]: { height: "360px" },
      [theme.breakpoints.down("md")]: { height: "340x" },
      [theme.breakpoints.down("sm")]: { height: "320px" },
      [theme.breakpoints.down("xs")]: { height: "300px" },
      position: "relative",
  
      "&.MuiPaper-rounded": {
        borderRadius: "0",
      },
  
      "& .MuiCardActions-root": {
        position: "absolute",
        bottom: 0,
        padding: "6px 4px 0",
        background: "#303030cf",
      },
  
      "&.MuiSkeleton-root": {
        backgroundColor: "rgb(255 255 255 / 14%)",
      },
    },
    img: {
      position: "absolute",
      cursor: "pointer",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      transition: "all 0.3s",
      background: "#303030cf",
      padding: "40px 20px 0",
      "&:hover": {
        transform: "scale3d(1.2, 1.2, 1.2)",
      },
    },
    actions: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    btn: {
      color: "#fff",
      cursor: "pointer",
      "&:hover": {
        color: "red",
      },
    },
    already_add__btn: {
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.success.main,
      },
    },
    info__overlay: {
      position: "fixed",
      content: "",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: "99",
      overflow: "scroll",
    },
    info__overlay__contentBox: {
      position: "absolute",
      top: "8rem",
      left: "50%",
      transform: "translateX(-50%)",
      width: "85rem",
      height: "auto",
      minHeight: "50rem",
      borderRadius: "1rem",
      overflow: "hidden",
      backgroundColor: "#111",
    },
    info__overlay__btnClose: {
      position: "absolute",
      top: 10,
      right: 0,
      border: "none",
      marginTop: "1.5rem",
      marginRight: "1.5rem",
      fontSize: "2rem",
      zIndex: "50",
      cursor: "pointer",
      color:"#fff" 
    },
    info__overlay__videoBox: {
      width: "100%",
      height: "100%",
      position: "relative",
    },
    info__overlay__youtube: {
      width: "100%",
      height: "47.8rem",
    },
    info__overlay__iconBox: {
      position: "absolute",
      bottom: "4vw",
      left: "3rem",
      display: "flex",
      alignItems: "center",
    },
    info__overlay__text: {
      padding: "2rem 4rem 4rem",
      color: "#fff",
    },
    info__overlay__youtube_icon: {
      padding: "2rem 4rem 4rem",
      color: "#fff",
    },
  }));
  

  export default useStyleMovieCard;