import React from "react";
// eslint-disable-next-line
import Main from "./components/home/Home";
import Footer from "./components/footer/footer";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const client = new ApolloClient({
  uri: "http://licensee-1.api.grasslandsmarkets.com/shop-api",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        {/* <Header /> */}
        <Main />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
