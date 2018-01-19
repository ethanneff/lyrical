import React from "react";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import { hashHistory } from "react-router";

import viewSongs from "../queries/viewSongs";
import deleteSong from "../queries/deleteSong";

import Header from "../components/Header";
import Collection from "../components/Collection";

const Main = props => {
  // properties
  const { songs } = props.data;
  const buttons = {
    buttons: [
      {
        icon: "navigate_next",
        onClick: e => onNavigate(e)
      },
      {
        icon: "delete",
        onClick: e => onDelete(e)
      }
    ]
  };
  const items = (songs || []).map(song => {
    return Object.assign({}, song, buttons);
  });

  // methods
  const onNavigate = e => {
    hashHistory.push(`songs/${e.id}`);
  };
  const onDelete = e => {
    props
      .mutate({
        variables: {
          id: e.id
        }
      })
      .then(() => {
        props.data.refetch();
      });
  };
  const onEdit = e => {};

  // render
  return (
    <div>
      <Header
        title="Song List"
        nav="songs/create"
        icon="add"
        primaryColor={true}
      />
      <Collection items={items} />
    </div>
  );
};

export default compose(graphql(viewSongs), graphql(deleteSong))(Main);
