const mongoose=require('mongoose')

const connection =()=>{
    mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology}).then((res)=>console.log("connection successfull")).catch((err)=>console.log(err))
}

module.exports=connection