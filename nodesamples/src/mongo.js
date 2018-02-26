var config={
  uname:'nithish',
  pwd:'nithish'
}
// using mlab database (mongo)
config.getDbconnectionstring =function () {
   return 'mongodb://'+this.uname+':'+this.pwd+'@ds145283.mlab.com:45283/mongobasic';
 }
module.exports=config;
