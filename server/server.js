const express = require('express');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const sanitize = require('express-mongo-sanitize');


const loadTestData = require('./testData');

const app = express();

//import routes
const postRoutes = require('./routes/post.routes');
const path = require('path');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/build')));
app.use('/api', postRoutes);
app.use(helmet());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(sanitize())

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});


// connects our back end code with the database
mongoose.connect(config.DB, { useNewUrlParser: true });
let db = mongoose.connection;

db.once('open', () => {
	//db.db.dropDatabase();
	console.log('Connected to the database')
	loadTestData();
});
db.on('error', (err) => console.log('Error ' + err));

app.listen(config.PORT, function(){
	console.log('Server is running on port:', config.PORT);
});

app.post('/login', function(req,res){
  User.findOne({ email: req.body.email, password: req.body.password }, function(err,data) {
    if(err){
      res.send(err);
    }
    else if(data) {
      res.send('User Login Successful');
    }
    else {
      res.send('Wrong Username Password Combination');
    }
  })
});

