import React from "react";
import App from "next/app";
import { Router } from "next/router";
import HomeMessage from "../components/HomeMessage";
import Layout from "../components/Layout";

class MyApp extends App {
  state = {
    showHomeMessage: true,
  };

  componentDidMount() {
    Router.events.on("routeChangeComplete", () => {
      this.setState({ showHomeMessage: false });
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    const { showHomeMessage } = this.state;

    return (
      <>
        {showHomeMessage ? (
          <HomeMessage />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </>
    );
  }
}

export default MyApp;
