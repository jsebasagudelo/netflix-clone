import { makeStyles } from "@material-ui/core";



const useStyleProfile = makeStyles((theme) => ({
    root: {
        color: "#fff",
        width: "100vw",
        height: "100vw",
        background: "#111",
      },
      body: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "800px",
    
        background: "#111",
      },
      info: {
        width: "80%",
        display: "flex",
        "& img": {
          height: "100px",
          [theme.breakpoints.down("sm")]: {
            display: "none",
          },
        },
      },
      details: {
        width: "100%",
        marginLeft: theme.spacing(3),
        "& h6": {
          backgroundColor: "#aaa",
          padding: theme.spacing(1),
          marginBottom: theme.spacing(1),
          fontSize: "18px",
        },
      },
      plans: {
        width: "100%",
      },
      plansText: {
        borderBottom: "1px solid lightgray",
      },
}))


export default useStyleProfile