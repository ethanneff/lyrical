// libs
const express = require("express");
const models = require("./models");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const schema = require("./schema/schema");
const config = require("./config");

// server
const app = express();

// database
mongoose.Promise = global.Promise;
mongoose.connect(config.mongo);
mongoose.connection
  .once("open", () => console.log("Connected to MongoLab instance."))
  .on("error", error => console.log("Error connecting to MongoLab: ", error));

// graphql
app.use(bodyParser.json());
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

// webpack
const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("../../webpack.config.js");
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
