const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true, //no 2 users can have the same email
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//creating a static method on our model (which usually comes with methods such as User.create...)
UserSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled out.");
  }

  //validation of email & strength of password
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  //check to see if email is not already used
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }

  //hashing the password with bcrypt)
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  //save the user to the database with the hashed password
  const user = await this.create({ email, password: hash });

  return user;
};

//static login method
UserSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled out.");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  return user;
};

module.exports = mongoose.model("User", UserSchema);
