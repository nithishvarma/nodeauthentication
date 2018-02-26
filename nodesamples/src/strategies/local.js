var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;
module.exports=function(authen){
  passport.use(new LocalStrategy({
    usernameField:'username',
    passwordField:'password'
  },
function(username,password,done){
  // retrieving from the mongoose db using findone passing json username object
  authen.findOne({'username':username},function(err,results) {
      if(err) handleError(err);
      var user=results;
      if(user.password!=password)
        done(null,user);
      else{
        done('wrong password',null);
      }
  });
}));
}
