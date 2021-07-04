

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css'

//Components
import Header from "./components/header/Header";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import Item from "./components/Item/Item";

import PageA from "./components/TestPages/PageA";
import PageB from "./components/TestPages/PageB";

import CNFooter from "./components/footer/CNFooter";
import CollectionsOverviewContainer from "./components/catalog/catalog-main/catalog-main.container";

import CNHeader from "./components/header/CNHeader";


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

             <CNHeader />

              <div className='container'>

              <Switch>
                <Route path="/PageA" exact component={PageA} />
                <Route path="/PageB" exact component={PageB} />
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

              </div>
           <CNFooter/>

            {/* <Header /> */}
            </BrowserRouter>
      </ApolloProvider>
    </FilterContextProvider>
  );
}

export default App;
{
  /* <Route path="/Catalog" exact component={Catalog} /> */
}
