const { Schema } = require('mongoose');

const reactionSchema = require('./Reaction');


const thoughtSchema = new Schema({
  thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
  },
  createdAt: { 
      type: Date,
      default: Date.now,
      get: formatDate
  },
  username: { 
      type: String, 
      required: true
  },
  reactions: [reactionSchema]
});

function formatDate(timestamp) {
  return new Date(timestamp).toLocaleDateString();
}

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
