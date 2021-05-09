
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//Components
import Header from './components/header/Header'
import Footer from './components/Footer/Footer'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import Catalog from './components/home/Catalog';
import Item from './components/Item/Item';

import PageA from './components/TestPages/PageA';
import PageB from './components/TestPages/PageB';

import "./App.css";

const client = new ApolloClient({
  uri: "http://licensee-1.api.grasslandsmarkets.com/shop-api",
  cache: new InMemoryCache(),
});

function App() {
  return (

    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="app">
        <Header />
          <Switch>
            <Route path="/" exact component={Catalog} />
            <Route path="/PageA" exact component={PageA} />
            <Route path="/PageB" exact component={PageB} />
            <Route path="/Item" exact component={Item} />
          </Switch>
        <Footer />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
