const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();
const PORT = 4000;

console.log('GraphQL Books Server');
console.log('------------------------------');

mongoose.connect(
  'mongodb+srv://rj123:rj123@cluster0-spqwk.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once('open', () => {
  console.log('Connected to Mongo database.');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));
