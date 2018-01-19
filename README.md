# Lyrical-GraphQL

Starter project from a GraphQL course on Udemy.com

#### dependencies

```sh
# client
npm i --save react-apollo # react to apollo
npm i --save apollo-client # graphql clientside
npm i --save react-dom # react
npm i --save react-router # routing
npm i --save react #
npm i --save classnames # css logic

# server
npm i --save axios # async request
npm i --save express #
npm i --save express-graphql #
npm i --save express-session #
npm i --save lodash #
npm i --save connect-mongo #
npm i --save mongoose #
npm i --save nodemon #
npm i --save graphql #
npm i --save passport #
npm i --save passport-local #

# dev ops
npm i --save babel-core #
npm i --save babel-loader #
npm i --save babel-preset-env #
npm i --save babel-preset-react #
npm i --save body-parser #
npm i --save html-webpack-plugin #
npm i --save css-loader #
npm i --save prettier #
npm i --save style-loader #
npm i --save webpack #
npm i --save webpack-dev-middleware #
```

#### graphql query variables

```js
mutation AddSong($title: String) {
  addSong(title: $title) {
    id
    title
  }
}
```

```
{
  "title": "sprite vs coke"
}
```
