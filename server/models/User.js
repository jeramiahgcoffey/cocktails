import mongoose from 'mongoose'
import validator from 'validator'

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide first name'],
        minLength: 2,
        maxLength: 25,
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'Please provide last name'],
        minLength: 2,
        maxLength: 25,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email',
        },
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minLength: 6,
    },
})

export default mongoose.model('User', UserSchema)
