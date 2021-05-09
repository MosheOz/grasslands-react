import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import Catalog from './components/catalog/catalog-main/catalog-main';

//test
import PageA from './components/TestPages/PageA';
import PageB from './components/TestPages/PageB';


const client = new ApolloClient({
  uri: "http://licensee-1.api.grasslandsmarkets.com/shop-api",
  cache: new InMemoryCache(),
});

function App() {
  return (

    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact component={Catalog} />
          </Switch>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
