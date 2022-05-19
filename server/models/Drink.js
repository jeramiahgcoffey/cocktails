import mongoose from 'mongoose'

const DrinkSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a drink name'],
            minLength: [2, 'Drink name must be at least 2 characters'],
            maxLength: [20, 'Drink name must be less than 21 characters'],
        },
        imageURL: {
            type: String,
            required: [true, 'Please add an image URL'],
        },
        ingredients: {
            type: Array,
            required: [true, 'Please add at least 1 ingredient'],
        },
        tags: {
            type: Array,
            of: String,
            required: [true, 'Please add at least one tag'],
        },
        instructions: {
            type: String,
            required: [true, 'Please add instructions'],
            minlength: [10, 'Instructions must be at least 10 characters'],
        },
        likes: {
            type: Number,
            default: 0,
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: [true, 'Please provide user'],
        },
    },
    { timestamps: true }
)

export default mongoose.model('Drink', DrinkSchema)
