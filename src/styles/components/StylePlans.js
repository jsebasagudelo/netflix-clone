import { makeStyles } from "@material-ui/core";

const useStylesPlans= makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& button": {
          marginBottom: theme.spacing(2),
        },
      },
      standard: {
        fontSize: "1.2rem",
      },
  }))

  export default useStylesPlans
