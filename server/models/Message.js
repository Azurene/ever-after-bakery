const { Schema, model } = require('mongoose');

const messageSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            match: [/.+@.+\..+/, 'Please enter a valid Email']
        },
        message: {
            type: String,
            required: true
        }
    }
);

const Message = model('Message', messageSchema);

module.exports = Message;