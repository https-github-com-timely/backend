const mongoose = require('mongoose');

const connection = `mongodb://localhost:27017/Timely`;
mongoose.connect(connection, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log(`Connection to db is good`);
});
