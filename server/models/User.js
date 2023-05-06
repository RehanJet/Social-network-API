const { Schema, model } = require('mongoose');

const thoughtSchema = require('./Thought');
const friendSchema = require('./User');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    thoughts: [thoughtSchema],
    friends: [friendSchema]
  }
);
const User = model('User', userSchema);
module.exports = User;
