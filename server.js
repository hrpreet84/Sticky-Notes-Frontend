const express = require('express');
//const task = require('./routes/api/task');
const connectDB = require('./config/db');

//create an Express App
const app  = express();

//Connect to db
connectDB();

//set the middleware to parse data
app.use(express.json({ extended: false }));


//use the api/user
app.use('/api/user',require('./routes/api/user'));

//use the api/note
app.use('/api/note',require('./routes/api/note'));

//use the api/category
app.use('/api/category',require('./routes/api/category'));


//Get request to root
app.get('/:name',(req,res) => res.send('Hello World ' + req.params.name));

app.post('/',(req,res) => res.send('Hello World POST Request daemon'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log('server ')
});