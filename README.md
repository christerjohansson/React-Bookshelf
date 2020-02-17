# GraphQL User Dashboard App

## Prerequisite

You need to setup a MongoDB Database otherwise this App wont work. Either create a local database or create an account on https://mlab.com/home

Then add the database mongoLab URI to server/server.js. Make sure that you create a user and a password for the login.

Example code in server/server.js file below:

```javacript
// Replace with your mongoDB URI
const API = 'mongodb://<dbuser>:<dbpassword>@ds111111.mlab.com:11111/databasename';
```

http://docs.mlab.com/connecting/#connect-string

## Install and Setup

Run the command below in the root of the client, and server folders to install the node_modules dependencies

```javascript
npm install
```

Run the command below in the root of the server folder, to start the app

```javascript
npm run dev
```

The App is running at http://localhost:3000/

## Adding Authors to your Database

The application requires Authors, to be in the database for it to work! Once you have added some Authors in the database, you can go to the frontend at http://localhost:3000/ and start adding books to the reading list.

Use the below GraphQL mutation example, to add Authors to your database. Go to http://localhost:4000/graphql and use the GraphiQL IDE to add some Authors.

You can find an example mutation for adding the Authors below. Replace the name and age, with your desired choice. Once you have executed the query by clicking on the button, the Authors should be added to your database.

Whenever you add new Authors or books you can just go to your database to see the new entries.

```javascript
mutation {
addAuthor(name: "J. K. Rowling", age: 52) {
  name
  age
  }
}
```