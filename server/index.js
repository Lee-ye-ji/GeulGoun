
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');

const mongoose = require('mongoose');

mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

//application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));

//application/json 
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', require('./routes/User'));

app.use('/api/memo', require('./routes/Memo'));
app.use('/api/board', require('./routes/Board'));
app.use('/api/comment', require('./routes/Comment'));




const port = 5000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))