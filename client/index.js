// lib
import "./style/style.css";
import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

// containers
import SongList from "./containers/SongList";
import SongCreate from "./containers/SongCreate";
import SongDetail from "./containers/SongDetail";
import App from "./containers/App";

const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

const Main = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="songs/create" component={SongCreate} />
          <Route path="songs/:id" component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Main />, document.querySelector("#root"));
