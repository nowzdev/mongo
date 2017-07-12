
const {MongoClient}=require("mongodb");
var url="mongodb://127.0.0.1/test";
MongoClient.connect(url,(err,db)=>{
  if(err){
    return console.log("Cannot connect To database");
  }
  var users=db.collection("users");
  users.find({_id:1,username:"saminowz",password:"pass"},(err,res)=>{
    if(err){
      return console.log(err)
    }
    console.log(res)
  })

})
