import gql from "graphql-tag";

export default gql`
  mutation CreateSong($title: String!) {
    addSong(title: $title) {
      id
      title
    }
  }
`;
