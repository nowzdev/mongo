
const {MongoClient}=require("mongodb");
var url="mongodb://127.0.0.1/test";
MongoClient.connect(url,(err,db)=>{
  if(err){
    return console.log("Cannot connect To database");
  }
  var users=db.collection("users");
  users.findOneAndDelete({useranme:"saminowz"}).then((res)=>{
    console.log(res)
  },(err)=>{
    console.log(err)
  })

})
