import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import useStyleFooter from "../styles/components/StyleFooter";
const Footer = () => {
  const classes = useStyleFooter();
  return (
    <footer className={classes.footer}>
      <div className={classes.copyright}>
        &copy; 2022 Made with ❤️ by {"  "}
        <a className={classes.link__container} href="https://github.com/jsebasagudelo/netflix-clone">
          {"   "}
           Sebastian Agudelo
        </a>
      </div>
    </footer>
  );
};

export default Footer;
