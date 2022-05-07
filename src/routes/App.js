import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Genero from "../pages/Genero";
import NotFound from "../components/NotFound";
import "../components/styles/App.css";
import Search from "../pages/Search";
import Mylist from "../components/Mylist";
import { useSelector } from "react-redux";
import useStylesApp from "../styles/components/StylesApp";

function App() {
  const classes = useStylesApp();
  const { user } = useSelector((state) => ({ ...state }));
  const userName = "";
  console.log(user.userInfo);

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Switch>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/genero" exact>
            <Genero />
          </Route>
          <Route path="/mylist" exact>
            <Mylist />
          </Route>

          <Route path="/search" exact>
            <Search />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
