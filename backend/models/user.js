const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String, 
        required: true
    },
    department: {
        type: String, 
        required: true
    },
    designation: {
        type: String, 
        required: true
    }
})

mongoose.model('User', userSchema)