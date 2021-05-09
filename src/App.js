import React from "react";
// eslint-disable-next-line
import Header from "./components/header/Header";
import Main from "./components/home/Home";
import Footer from "./components/footer/footer";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

import "./App.css";

const client = new ApolloClient({
  uri: "http://licensee-1.api.grasslandsmarkets.com/shop-api",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
