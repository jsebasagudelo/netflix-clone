import React, { useEffect, useState } from "react";
import {AppBar,  Avatar,  IconButton,  Toolbar,  Button, } from "@material-ui/core";

import { useHistory } from "react-router";
import {useDispatch} from  'react-redux'
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import avatar from "../assets/images/netflixavatar_red.png";
import {setSearchInputValue} from  '../actions/index'
import logo from "../assets/images/netflix-logo.png";
import useStyleHeader from "../styles/components/StyleHeader";
const Header = () => {
  const classes = useStyleHeader();
  const [show, setShow] = useState(false);
  const [inputsearch, setInputSearch] = useState("");
  const history = useHistory();
  const dispatch=useDispatch()

  const hideHeader = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const handleChange = (event) => {
    setInputSearch(event.target.value);
    dispatch(setSearchInputValue(event.target.value))
    if(event.target.value.length > 0){
      history.push(`/search?q=${event.target.value}`);     

    }else{
      history.push("/");
    }


  };

  const handleHome = () => {
    dispatch(setSearchInputValue(""))
    setInputSearch("")
    history.push("/")
  }

  const handlePeliculas = () => {
     history.push("/genero")
  }
  const handleProfile = () => {
    history.push("/profile")
 }

  const handleMyList= () => {
    history.push("/mylist")
 }


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
          <IconButton onClick={handleHome}>
            <img src={logo} al="logo" className={classes.logo} />
          </IconButton>
          <Button color="inherit" variant="text" onClick={handlePeliculas }  >
            Peliculas
          </Button>
          <Button color="inherit" variant="text" onClick={ handleMyList}>
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
            onClick={handleProfile}
          />
           
        </div>
      </Toolbar>
    </AppBar>
  );
};


export default Header;
