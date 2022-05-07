import { makeStyles } from "@material-ui/core";


const useStyleModal = makeStyles((theme) => ({
    root: {
    
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
   
  }));


  export default useStyleModal