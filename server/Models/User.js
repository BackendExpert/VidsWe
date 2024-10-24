const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    default: ""
  },
  Role: {
    type: String,
    default: "User"
  },

  followers: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  following: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  is_active: {
    type: Boolean,
    required: true,
    default: true
  }
},
{timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      return next();
    }
  
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      return next(error);
    }
  });
  
  // Method to compare entered password with stored hashed password
  userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };


const User = mongoose.model('User', userSchema);

module.exports = User;