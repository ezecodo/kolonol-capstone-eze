import React from "react";
import App from "next/app";
import { Router } from "next/router";
import HomeMessage from "../components/HomeMessage";
import Layout from "../components/Layout";

class MyApp extends App {
  state = {
    showHomeMessage: true,
    userName: "",
  };

  handleUserNameChange = (userName) => {
    this.setState({ userName });
  };

  componentDidMount() {
    Router.events.on("routeChangeComplete", () => {
      this.setState({ showHomeMessage: false });
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    const { showHomeMessage, userName } = this.state;

    return (
      <>
        {showHomeMessage ? (
          <HomeMessage onUserNameChange={this.handleUserNameChange} />
        ) : (
          <Layout userName={userName}>
            <Component {...pageProps} userName={userName} />
          </Layout>
        )}
      </>
    );
  }
}

export default MyApp;
