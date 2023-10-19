const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    userName: String,
    pfp: String,
    contact: [Number],
    role: {
        type: String,
        enum: ['Supplier', 'Receiver']
    },
    location: String,
    waste: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Waste'
    },
});

module.exports = mongoose.model('User', userSchema);