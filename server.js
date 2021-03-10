const createError = require('http-errors')
const express = require('express');
const path = require('path');
const cookiParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const LoginAdminRouts = require('./routes/loginAdminRouts')



require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookiParser());


const uri = process.env.ATLAS_URI

mongoose.connect(process.env.MONGODB_URI || uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('we are connected to db');
});

const commentRouter = require('./routes/comments');
app.use('/', commentRouter);

const contactRouter = require('./routes/contact')
app.use('/contact', contactRouter);

let msg =process.env.NODE_ENV
LoginAdminRouts(app);



if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build')); // serve the static react app
    app.get(/^\/(?!api).*/, (req, res) => { // don't serve api routes to react app
      res.sendFile(path.join(__dirname, './client/build/index.html'));
    });
    console.log('Serving React App...');
  };
  
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});