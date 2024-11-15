// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  work_email: {
    type: String,
  },
  organization: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required:true
  },
  youtube_url: {
    type: String,
  },
  facebook_url:{
    type: String,
  },
  linkden_url: {
    type: String,
},
  twitter_url: {
    type: String,
  },
  isAllowed :{
    type: Boolean,
    default : true
  },
  user_image :{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
