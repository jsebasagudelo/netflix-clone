import React, { Component } from "react";
import Error from "../components/Error";


export const errorBoundary = (WrappedComponent) => {
  const resetError = (context) => context.setState({ error: false });

  return class extends Component {
    state = { error: false };
    static getDerivedFromError = () => ({ error: true });

componentDidCatch(error)
{
    console.log("error: ", error);
   
      this.setState({
          hasError:true,
          message:error.message,
          error:true
      })
}


    render() {
      const { props, state } = this;
      const { hasError,message } = state;
      const title = " an error has occurred";
      
      const ErrorRender = <Error  title={title}  message={message}  />;
      const NormalRender = <WrappedComponent {...props} />;    
      return hasError ? ErrorRender : NormalRender;

    }
  };
};