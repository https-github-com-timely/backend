require('./db/index');
const express = require('express');
const eventRoutes = require('./routes/event.routes');
const userRoutes = require('./routes/users.routes');

const app = express();
app.use(express.json());



app.use('/api/event', eventRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on: ${PORT}`);
});

module.exports = app;
