import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components
import Header from "./components/header/Header";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import Item from "./components/Item/Item";
import Footer from "./components/footer/footer";
import CollectionsOverviewContainer from "./components/catalog/catalog-main/catalog-main.container";

import "./App.css";

import { FilterContextProvider } from "./context";
const client = new ApolloClient({
  uri: "http://licensee-1.api.grasslandsmarkets.com/shop-api",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <FilterContextProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="app">
            <Header />
            <main className="main">
              <Switch>
                <Route path="/Item" exact component={Item} />
                <Route
                  path="/catalog"
                  exact
                  component={CollectionsOverviewContainer}
                />
                <Route
                  path="/"
                  exact
                  component={CollectionsOverviewContainer}
                />
              </Switch>
            </main>
          </div>
          <Footer />
          <div className="footer-background dark"></div>
        </BrowserRouter>
      </ApolloProvider>
    </FilterContextProvider>
  );
}

export default App;
