var mongoose=require('mongoose');
// creating our todoSchema
var Schema=mongoose.Schema;
var todoSchema=new Schema({
  username:String,
  password:String,
});
// creating our collection
var auth=mongoose.model('users',todoSchema);
module.exports=auth;
