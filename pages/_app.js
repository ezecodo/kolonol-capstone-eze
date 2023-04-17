import React from "react";
import App from "next/app";
import { Router } from "next/router";
import HomeMessage from "../components/HomeMessage";
import Layout from "../components/Layout";
import GlobalStyle from "../styles/globalStyles";
import { HighlightProvider } from "../components/HighlightProvider";

class MyApp extends App {
  state = {
    showHomeMessage: true,
    userName: "",
    isLoading: false,
  };

  handleUserNameChange = (userName) => {
    this.setState({ userName });
  };

  componentDidMount() {
    Router.events.on("routeChangeComplete", () => {
      this.setState({ showHomeMessage: false });
    });
    Router.events.on("routeChangeStart", () => {
      this.setState({ isLoading: true });
    });

    Router.events.on("routeChangeComplete", () => {
      this.setState({ isLoading: false });
    });

    Router.events.on("routeChangeError", () => {
      this.setState({ isLoading: false });
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
          <HighlightProvider>
            <Layout userName={userName}>
              <GlobalStyle />
              <Component {...pageProps} userName={userName} />
            </Layout>
          </HighlightProvider>
        )}
      </>
    );
  }
}

export default MyApp;
