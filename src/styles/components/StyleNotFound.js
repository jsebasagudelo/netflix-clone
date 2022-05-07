import { makeStyles } from "@material-ui/core";
import logo from  '../../assets/images/404.jpg';
const useStylesNotFound= makeStyles((theme) => ({
    root: {
      color: "#fff",
     /// background: "#111",
     // width: "100vw",
      //height: "100vw",
     // textAlign:"center",
     // paddingTop:theme.spacing(6),
     fontSize:"0.5rem",
     
     [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.25rem",
    },
    },
    
    logo: {
      color: theme.palette.common.red,
      width: "max-content",
      fontSize: "2rem",
      paddingTop: "20px",
      fontWeight: "bold",
      position: "relative",
      zIndex: "100",
      [theme.breakpoints.down("md")]: {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: "16px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.25rem",
      },
    },
    bg: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${logo})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    content: {
      position: "absolute",
      top: 0,
      left: 0,
      padding: "3em 4% 0",
      height: "100%",
    },
    link:{
      
      boxSizing: "inherit",
      padding: "2px 0",
      textDecoration:"none",
      color: "inherit",
      "&:hover":{
        borderBottom: "1px solid #fff"
      }
    },
    error:{
      borderLeft: "6px solid #e50914",
      padding: "0 40px",
      borderRight: "6px solid #e50914",

    }
  }))

  export default useStylesNotFound
