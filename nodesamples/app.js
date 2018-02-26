// All the libraries required
var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var passport=require('passport');
var auth=require('./src/auth.js');
var mongoose=require('mongoose');
var session=require('express-session');
var cookieParser=require('cookie-parser');
var monoconfig=require('./src/mongo.js');
// default port you can use anything above 3000
port=3013;
// using mongoose connection with monoconfig(contains details for connection)
mongoose.connect(monoconfig.getDbconnectionstring());
app.listen(port);
// we intiating express-session for every request
app.use(session({secret:'auth'}));
// body parser parses the all http urls
app.use(bodyParser.urlencoded({ extended: false }));
// all jsons
app.use(bodyParser.json());
// cookie parser
app.use(cookieParser());
// intializing passport
app.use(passport.initialize());
app.use(passport.session());
require('./src/passport')(app);
//seperate router for authentication
app.use('/auth',auth);
app.set('view engine','ejs');
// home rendering index.ejs
app.get('/',function(req,res){
  res.render('index');
});
