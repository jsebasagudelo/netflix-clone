import { makeStyles } from "@material-ui/core";


const useStyleModalInfo = makeStyles((theme) => ({
    root: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "400px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
      inner: {
        backgroundImage:
          "linear-gradient(to top,rgba(0,0,0) 0,rgba(0,0,0,0) 40%,rgb(0 0 0 / 20%) 100%)",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "400px",
      },
      content: {
        height: "100%",
        position: "relative",
        zIndex: "10",
        paddingBottom: "15px",
        [theme.breakpoints.down("sm")]: {
          height: "90%",
        },
      },
      rate: {
        color: "#33eb91",
      },
      date: {
        color: "#a3a3a3",
      },
      play__btn: {
        background: "#fff",
        height: " 40px",
        "& .MuiButton-label": {
          color: "#111 !important",
        },
        "&.MuiButton-root:hover": {
          backgroundColor: `rgb(255 255 255 / 90%) !important`,
        },
      },
      add__btn: {
        color: "#fff",
        height: " 40px",
        background: "rgb(133 133 133 / 60%)",
        "&.MuiButton-root:hover": {
          backgroundColor: `rgb(133 133 133 / 80%) !important`,
        },
      },
      already_add__btn: {
        height: " 40px",
        background: "#26ff2fd4",
        "&.MuiButton-root:hover": {
          background: "#26ff2f80 !important",
        },
      },
      btn: {
        color: "#fff",
        cursor: "pointer",
        "&:hover": {
          color: "red",
        },
      },
      overview:{
          color: "#fff"
      },
      title:{
        color: "#fff",
        fontSize: 30,
      }
  }));
  

  export default useStyleModalInfo;