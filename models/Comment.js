const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
    writtenBy: {
        type: String
    },
    commentBody: {
        type: String
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
});

// create the model using the CommentSchema, schema must be initialized first
const Comment = model('Comment', CommentSchema);

module.exports = Comment;