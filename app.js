const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
var http = require('http');
// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

const app = express();
const forgot = require('./routes/forgot');
const users = require('./routes/users');
const admin = require('./routes/admin');
const prop = require('./routes/prop');
const not = require('./routes/not');
// Port Number 
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);
app.use('/adminspace', not);
app.use('/forgot_password',forgot);
app.use('/users', users);
app.use('/prop', prop);
app.use('/admin', admin);
// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile('./index.html');
});
// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
