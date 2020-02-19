
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const Routes = require('../backend/Routes/routes');



app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/musicusers', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function () {
    console.log("Mongo db connection establish sucessfully");

})

app.use('/users', Routes);
const port = 9000;





app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

