const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/createRouter.js');
const cors = require('cors');
const parser = require('body-parser');
app.use(parser.json());
app.use(cors())

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('booking_list');
  const bookingCollection = db.collection('booking');
  const bookingRouter = createRouter(bookingCollection);
  app.use('/api/bookings', bookingRouter);
})
.catch(console.error);


app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
