const mongoose = require('mongoose')


const connectDb = async ()=>
{
  try {
    await mongoose.connect(process.env.mongodb_uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error in connectiong to DB.",error);
    
  }
}
module.exports = connectDb;