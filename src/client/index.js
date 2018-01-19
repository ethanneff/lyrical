// lib
import "./style/style.css";
import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// containers
import SongList from "./containers/SongList";
import SongCreate from "./containers/SongCreate";
import SongDetail from "./containers/SongDetail";
import NotFound from "./containers/NotFound";
import App from "./containers/App";

// apollo
const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache({
    dataIdFromObject: o => o.id
  })
});

// entry
const Main = () => {
  return (
    <ApolloProvider client={client}>
      <App>
        <Router>
          <Switch>
            <Route exact path="/" component={SongList} />
            <Route path="/songs/create" component={SongCreate} />
            <Route path="/songs/:id" component={SongDetail} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </App>
    </ApolloProvider>
  );
};

ReactDOM.render(<Main />, document.querySelector("#root"));
