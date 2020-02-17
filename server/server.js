const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Allow cross-origin requests.
app.use(cors());

// Add your database details here so that the app has an endpoint for GraphQL to send the data too

// Example MongoDB URI for Database:
// const API = 'mongodb://<dbuser>:<dbpassword>@ds111111.mlab.com:11111/databasename'

// connect to mlab database
const API = ''
mongoose.connect(API);
mongoose.connection.once('open',() => {
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));