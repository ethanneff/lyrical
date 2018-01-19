import React from "react";
import { graphql } from "react-apollo";
import viewSong from "../queries/viewSong";

import Header from "../components/Header";
import Collection from "../components/Collection";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

const Main = props => {
  const { song } = props.data;
  if (!song) return <div />;
  const items = [
    {
      id: song.id,
      title: song.title
    }
  ];

  return (
    <div>
      <Header title="Song Detail" />
      <Collection items={items} />
      <LyricList lyrics={song.lyrics} />
      <LyricCreate songId={song.id} />
    </div>
  );
};

export default graphql(viewSong, {
  options: props => {
    return { variables: { id: props.match.params.id } };
  }
})(Main);
