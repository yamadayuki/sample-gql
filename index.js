const { readFileSync } = require("fs");
const { inspect } = require("util");
const { graphql, buildSchema } = require("graphql");

const content = readFileSync("./sample.gql").toString();

const schema = buildSchema(content);

console.log(inspect(schema, { colors: true, depth: null }));
