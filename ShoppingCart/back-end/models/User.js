const mongoose  = require('mongoose');
const jwt = require('jsonwebtoken');
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  profileImg: String,
  isAdmin : Boolean,
  permissions : String
});

UserSchema.methods.generateToken = function() {
  return jwt.sign({ _id: this._id, name : this.name ,isAdmin: this.isAdmin }, 'samplesecret');
}

module.exports = mongoose.model("User", UserSchema);
