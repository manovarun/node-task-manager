const express = require('express');
const config = require('config');
const connectDB = require('./db');

const app = express();
const db = connectDB();

app.use(express.json({ extended: false }));

app.use('/users', require('./src/routes/users'));
app.use('/tasks', require('./src/routes/tasks'));

app.get('/', (req, res) => {
  res.json({ msg: 'Task Manager' });
});

const PORT = process.env.PORT || config.get('PORT') || 5000;

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
