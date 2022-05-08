import { makeStyles } from "@material-ui/core";

const useStylesBannerBase = makeStyles((theme) => ({
    root: {
       
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
    
      description: {
        wordWrap:"break-word"
      },
  }));

  export default useStylesBannerBase