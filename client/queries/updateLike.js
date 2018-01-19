import gql from "graphql-tag";

export default gql`
  mutation updateLike($id: ID!) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;
