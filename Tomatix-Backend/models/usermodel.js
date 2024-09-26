const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  
  
  username: {
    type: String,
    required: [true, "name is require"],
  },
  email: {
    type: String,
    required: [true, "email is require"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  phone:{
   type:Number,
   required:true
  },
  
  isAdmin: {
    type: Boolean,
    default: false,
  },
  section:{
    type:String,
    default:"all"
  }

});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;