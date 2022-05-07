import { makeStyles } from "@material-ui/core";

const useStyleBanner = makeStyles((theme) => ({
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

  export default useStyleBanner;
  