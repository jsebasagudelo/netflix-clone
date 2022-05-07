import { makeStyles } from "@material-ui/core";

const useStyleFooter = makeStyles((theme) => ({
    root: {
      padding: "100px 0",
      background: "#111",
      borderBottom: `8px solid #222`,
    },
    text: {
      color: "#111 !important",
      fontSize: "18px",
    },
    link__container: {
      padding: "50px 0",
    },
    copyright: {
      color: "#fff",
      textAlign: "center",
      lineHeight: "1.8",
      display: "flex",
      "&:hover": {
        borderBottom: "1px solid #fff",
      },
      "&:active,&:visited": {
        boxSizing: "inherit",
        padding: "2px 0",
        textDecoration: "none",
        color: "#fff",
      },
    },
    footer_row: {
      marginTop: "40",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
     
      justifyContent: "center",
    },
    footer_wrapper: {
      maxWidth: "1000",
      margin: "auto",
      padding: "70px 56px",
    },
  }));

  export default useStyleFooter