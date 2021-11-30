const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema(
    {
        posterId: {
            type: String,
            required: true
        },
        description: {
            type: String,
            trim: true,
            maxlength: 500
        },
        picture: {
            type: String
        },
        likes: {
            type: [String],
            required: true
        },
        comments: {
            type: [
                {
                    commenterId: String,
                    commenterPseudo: String,
                    text: String,
                    timeStamp: Number
                }
            ],
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;