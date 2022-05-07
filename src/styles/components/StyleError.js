import { makeStyles } from "@material-ui/core";

const useStylesError = makeStyles((theme) => ({
    bg: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        background:"#111",
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
      error:{
        borderLeft: "2px solid #e50914",
        padding: "0 40px",
        borderRight: "2px solid #e50914",
     
        color:"#fff" 
      }
  }));

  export default useStylesError