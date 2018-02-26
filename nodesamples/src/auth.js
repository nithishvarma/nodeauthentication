var express=require('express');
var router=express.Router()
// we taking mongo object with required model
var authen=require('./mongomodel.js');
var passport=require('passport');
// signup code with routing
router.post('/signup',function (req,res) {
  console.log(req.body);
  var user=new authen({
    username:req.body.email,
    password:req.body.password
  });
  user.save(function(err){
    if(err) console.log('error');
    else{
      console.log('inserted in the database');
      req.login(req.body,function() {
        res.redirect('/auth/data');
      });
    }
  })
});
// signin default using passport_authenticate local
router.post('/signin',passport.authenticate('local',{
  failureRedirect:'/as'
}),function(req,res){
  res.redirect('/auth/data2');
});
// for illegal access without login
router.route('/data')
 .all(function(req,res){
   if(!req.user)
      res.redirect('/');
   next();
 });
 router.route('/data2')
  .all(function(req,res){
    if(!req.user)
       res.redirect('/');
    next();
  });
  // code to acces after succesful signup
router.get('/data',function (req,res) {
  res.json(req.user);
});
// code to access after succesfull log in
router.get('/data2',function(req,res){
  req.user.message='you signed in';
  res.json(req.user);
});

module.exports=router;
