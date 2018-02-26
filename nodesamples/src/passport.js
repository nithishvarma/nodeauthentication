var passport=require('passport');
var authen=require('./mongomodel.js');
module.exports=function(app){
// used on logging in loads user data
  passport.serializeUser(function(user,done) {
    done(null,user);

  });
  // assign user data to the req as req.user so that we can use user information and store for stateful http service
  passport.deserializeUser(function(user,done) {
    done(null,user);
  });


// local strategie
  require('./strategies/local')(authen);
}
