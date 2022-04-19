import { useContext, Suspense, lazy } from "react";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Genero from "../Pages/Genero";
import NotFound from "../components/NotFound";
import MovieDetail from "../components/MovieDetail";

import "../components/styles/App.css";
import Row from "../components/Row";
import Layout from "../components/Layout";
import ComponentRender from "../components/render";

function App() {
  const classes = useStyles();
  const user="jsagudelo"
  //const user = useContext(AuthContext);
  //console.log("datos user:" + user);

  return (
    <div className={classes.root}>
      {/*
      
      
      */}
      <BrowserRouter>
        <Layout>
          {!user ? (
            <Login />
          ) : (
            <Switch>
             
             <Route path="/test" exact>
                  <ComponentRender />
                </Route>
                <Route path="/profile" exact>
                  <Profile />
                </Route>
                <Route path="/genero" exact>
                  <Genero />
                </Route>
                <Route path="/detail/:id">
                  <MovieDetail />
                </Route>
               
                <Route path="/row" exact>
                  <Row />
                </Route>
                <Route path="/" exact>
                  <Home />
                </Route>

                <Route component={NotFound} />
              
            </Switch>
          )}
        </Layout>
      </BrowserRouter>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#111",
    // minHeight: "100vh",
    lef: 0,
    right: 0,
    fontSize: " 62.5%",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
}));

export default App;
