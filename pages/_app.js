import React from "react";
import App from "next/app";
import { AppStateProvider } from "./app-context";

const appInitialState = {
  message: "Hola mundo",
};

// personalizar la funcionalidad de next.js
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppStateProvider initialState={appInitialState}>      
       <Component {...pageProps} />
      </AppStateProvider>
    );
  }
}

export default MyApp;