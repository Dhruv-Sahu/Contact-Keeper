const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({
    user: {     //Users have their own contacts and we get it by ID
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    type: {
        type: String,
        default: 'personal'
    },
    date: {
        type: String,
        default: Date.now
    }, 
});

module.exports = mongoose.model('contact',ContactSchema);
// to use it in a user routes file