import { makeStyles } from "@material-ui/core";

const useStylesSignUp= makeStyles((theme) => ({
    root: {
        maxWidth: "350px",
        width: "20rem",
        height: "25rem",
        background: "rgba(0,0,0,0.65)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        "& h5": {
          marginTop: theme.spacing(2),
          width: "70%",
        },
      },
      email: {
        marginBottom: theme.spacing(2) /*2 => 16px  */,
      },
      password: {
        marginBottom: theme.spacing(4),
      },
      icon:{
        padding:"2",
        marginLeft: theme.spacing(4),
      },
      form: {
        width: "80%",
      },
      signupLink: {
        color: "#fff",
        cursor: "pointer",
        "&:hover": {
          textDecoration: "underline",
        },
      },
      errormessage:{
        color: "#e50914",
            fontSize: "16px",
            lineHeight: "1.2",
            marginBottom: "10px",
      }

  }))

  export default useStylesSignUp
