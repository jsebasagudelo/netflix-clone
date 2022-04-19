import React from "react";
import { createPortal } from "react-dom";

import { makeStyles } from "@material-ui/core";
import {ReactComponent  as SVGClose} from "../assets/static/icons/close.svg";
// pattern design: container
const Modal = ({ isOpen,children,onClose }) => {
    const classes = useStyles();
  if (!isOpen) return null;
  return createPortal(
    <div className={classes.modal}>
          <figure onClick={onClose} className={classes.modal__close}>
         <SVGClose className={classes.modal__close_icon}/>
          </figure>
          <div>{children}</div>
        </div>,
    document.getElementById("modal")
  );
};

const useStyles = makeStyles((theme) => ({
    root: {
      
  
    },
    modal:{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor:"rgba(0, 0, 0, 0.75)",      
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    modal__close:{
        borderRadius: "50%",
        height: "45",
        margin: "25",
        position: "absolute",
        right: 0,
        top: 0,
        width: "45",
    },
    modal__close_icon:{
        height: "20",
        width: "20",
        fill: "#faf76a"
      }
}))

export default Modal;
