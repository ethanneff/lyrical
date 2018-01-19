import React, { Component } from "react";
import { graphql } from "react-apollo";
import PropTypes from "prop-types";

import createLyric from "../queries/createLyric";
import viewSong from "../queries/viewSong";

import Header from "../components/Header";
import Input from "../components/Input";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
  }

  onSubmit(e) {
    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    });

    this.setState({ content: "" });
  }

  onChange(e) {
    this.setState({ content: e });
  }

  render() {
    const { content } = this.state;

    return (
      <div>
        <Header title="Lyric Create" hasButton={false} />
        <Input
          placeholder="Lyric"
          onSubmit={e => this.onSubmit(e)}
          onChange={e => this.onChange(e)}
          value={content}
        />
      </div>
    );
  }
}

Main.propTypes = {
  songId: PropTypes.string.isRequired
};

export default graphql(createLyric)(Main);
