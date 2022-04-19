import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  IconButton,
  makeStyles,
  Toolbar,
  alpha,
  Button,
  Typography,
} from "@material-ui/core";
import logo from "../assets/images/netflix-logo.png";
import { useHistory } from "react-router";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import avatar from "../assets/images/netflixavatar_red.png";
const Header = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [inputsearch, setInputSearch] = useState("");
  const history = useHistory();

  const hideHeader = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const handleChange = (event) => {
    setInputSearch(event.target.value);
  };

  useEffect(() => {
    window.addEventListener("scroll", hideHeader);
    return () => window.removeEventListener("scroll", hideHeader);
  }, []);

  return (
    <AppBar
      position="sticky"
    
      className={`${classes.root} ${show && classes.scrolled}`}
      elevation={0}
    >
      <Toolbar className={classes.toolbar}>
        <div className={classes.Izquierda}>
          <IconButton onClick={() => history.push("/")}>
            <img src={logo} al="logo" className={classes.logo} />
          </IconButton>
          <Button color="inherit" variant="text" onClick={ ()=>  history.push("/genero") }  >
            Peliculas
          </Button>
          <Button color="inherit" variant="text" onClick={ ()=>  history.push("/genero") }>
            Mi Lista
          </Button>
        </div>

        <div className={classes.Lateral}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={handleChange}
              value={inputsearch}
            />
          </div>
          <Avatar
            variant="square"
               src={avatar}
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/profile")}
          />
           
        </div>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {  
    top: 0,
    lef: 0,
    right: 0,
    position: "fixed",
    zIndex:999, 
     background:"linear-gradient(to bottom, rgba(22, 22, 22, 0.801), rgba(22, 22, 22, 0.493), transparent)",
     fontSize:"font-size: 1.4rem"
   
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "item",
  },

  logo: {
    width: "100px",
    cursor: "pointer",
  },
  scrolled : {
    //backgroundColor: "transparent",
    //backgroundColor: "#111",
    background:"linear-gradient(to bottom, rgb(0, 0, 0) 10%, rgb(8, 8, 8) 50%, rgb(17, 17, 17) 100%)",
    opacity:"0.9" ,
  },
  Lateral: {
    display: "flex",
    justifyContent: "center",
    alignItems: "item",
    gap: 10 /* distancia*/,
  },
  Izquierda: {
    display: "flex",
    
    "& button":{
      
    },
    "& button:hover":{
      color: "#b3b3b3",
    
      
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default Header;
