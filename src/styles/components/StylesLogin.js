import { makeStyles } from "@material-ui/core";

const useStylesLogin= makeStyles((theme) => ({
    
    root: {
        position: "relative",
        height: "100vh",
       
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        objectFit: "contain",
      },
      session: {
        position: "fixed",
        zIndex: 15,
        right: 20,
        top: 20,
      },
      image: {
        position: "fixed",
        top: 0,
        left: 20,
        width: "150px",
        cursor: "pointer",
      },
      info: {
        zIndex: 15,
        color: "#fff",
        textAlign: "center",
        "& h4": {
          fontWeight: 800,
        },
        "& h5": {
          fontWeight: 400,
        },
      },
      inputBlock: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "700px",
        marginTop: theme.spacing(4),
      },
  }))

  export default useStylesLogin
