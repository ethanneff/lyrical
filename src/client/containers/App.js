// lib
import React from "react";
import { Route, Switch } from "react-router-dom";

// containers
import SongList from "./SongList";
import SongCreate from "./SongCreate";
import SongDetail from "./SongDetail";
import NotFound from "./NotFound";

const Main = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={SongList} />
        <Route path="/songs/create" component={SongCreate} />
        <Route path="/songs/:id" component={SongDetail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Main;
