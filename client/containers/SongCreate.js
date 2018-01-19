import React, { Component } from "react";
import { graphql } from "react-apollo";

import viewSongs from "../queries/viewSongs";
import createSong from "../queries/createSong";

import Header from "../components/Header";
import Input from "../components/Input";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }
  componentDidMount() {
    this.songCreateInput.focus();
  }

  onSubmit(e) {
    this.props
      .mutate({
        variables: {
          title: this.state.title
        },
        refetchQueries: [{ query: viewSongs }]
      })
      .then(() => {
        this.props.history.push("/");
      });
  }

  onChange(e) {
    this.setState({ title: e });
  }

  onRef(e) {
    this.songCreateInput = e;
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <Header title="Song Create" />
        <Input
          placeholder="Song title"
          onSubmit={e => this.onSubmit(e)}
          onChange={e => this.onChange(e)}
          onRef={e => this.onRef(e)}
          value={title}
        />
      </div>
    );
  }
}

export default graphql(createSong)(Main);
