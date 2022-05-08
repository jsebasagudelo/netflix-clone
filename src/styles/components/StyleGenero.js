import { makeStyles } from "@material-ui/core";



const useStyleGenero = makeStyles((theme) => ({
    root: {
        color: "#fff",
        marginLeft: theme.spacing(4),
        height:"80vh" 
      },
      contenedor: {
        background: "#111",
      },
      select: {
        "&:before": {
          borderColor: "#fff",
        },
        "&:after": {
          borderColor: "#fff",
        },
        "&:not(.Mui-disabled):hover::before": {
          borderColor: "white",
        },
        color:"#fff"
      },
      icon: {
        fill: "#fff",
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        color: "#fff",
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
        backgroundColor: "#b3b3b3",
      },
      colorBlanco: {
        color: "#fff",
      },
      genero: {
        //display: "flex",
        //: 30 /* distancia*/,
        color: "#fff",
        marginLeft:theme.spacing(4)
        
      },
      title:{
        color:"#fff"
      }
}))


export default useStyleGenero