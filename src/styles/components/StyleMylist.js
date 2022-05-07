import { makeStyles } from "@material-ui/core";


const useStyleMyList = makeStyles((theme) => ({
    root: {
      background: "#111",
      height: "100vw",
    },
    
    espacio: {
      height: "5vw",
      background: "#111",
    },
    row__title: {
      fontSize: "2vw",
      fontWeight: "500",
      textShadow: "2px 2px 4px rgba(0,0,0,.25)",
      paddingLeft: "3vw",
    },
    row: {
      padding: 0,
      position: "relative",
      margin: "1.5vw 0 2.5vw",
    },
    row__posters: {
      display: "flex",
      justifyContent: "flex-start",
      scrollBehavior: "smooth",
      overflowX: "scroll",
      overflowY: "hidden",
      padding: "1rem 0 1rem 3vw",
    },
    row__poster: {
      width: "auto",
      height: "10vw",
      objectFit: "contain",
      maxHeight: "15rem",
      minHeight: "8rem",
      transition: "transform 0.3s",
      borderRadius: "5px",
      marginRight: "1rem",
      cursor: "pointer",
     
      "&:hover":{
          transform: "scale(1.1)",
      }
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
      top: 0,
      right: 0,
      border: "none",
      marginTop: "1.5rem",
      marginRight: "1.5rem",
      fontSize: "2rem",
      zIndex: "50",
      cursor: "pointer",
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
    info__button: {
      backgroundColor: "rgba(100, 100, 100, 0.5)",
      color: "inherit",
      fontWeight: "500",
      fontFamily: "inherit",
      fontSize: "2rem",
      border: "none",
      padding: "1.5rem 3rem",
      minWidth: "10rem",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      transition: "all 0.1s",
      cursor: "pointer",
    },
    info__button__play: {
      color: "#333",
      backgroundColor: "#fff",
      fontSize: "2rem",
    },
    icon__black__opacity: {
      color: "rgba(32, 32, 32, 0.6)",
    },
    info__overlay__text: {
      padding: "2rem 4rem 4rem",
      color: "#fff",
    },
    pagination: {
      position: "absolute",
      opacity: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "calc(100% - 2rem)",
      width: "3vw",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      transition: "opacity 0.2s",
      zIndex: "10",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      },
    },
    pagination__right: {
      right: 0,
      top: "1rem",
    },
    pagination__left: {
      left: 0,
      top: "1rem",
    },
  }));


  export default useStyleMyList