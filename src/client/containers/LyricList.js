import React from "react";
import { graphql } from "react-apollo";

import updateLike from "../queries/updateLike";
import viewSong from "../queries/viewSong";

import Header from "../components/Header";
import Collection from "../components/Collection";

const Main = props => {
  // properties
  const { lyrics } = props;
  const buttons = [
    {
      icon: "thumb_up",
      onClick: e => onThumb(e)
    }
  ];
  const items = (lyrics || []).map(({ id, content, likes }) => {
    return {
      id: id,
      title: content,
      buttons: buttons,
      subtitle: likes.toString()
    };
  });

  // methods
  const onThumb = e => {
    props.mutate({
      variables: { id: e.id },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id: e.id,
          __typename: "LyricType",
          likes: parseInt(e.subtitle) + 1
        }
      }
    });
  };

  // render
  return (
    <div>
      <Header title="Lyric List" hasButton={false} />
      <Collection items={items} />
    </div>
  );
};

export default graphql(updateLike)(Main);
