import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError } from '../errors/index.js'

// Using express-async-error
const register = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body

    if (!firstName || !lastName || !email || !password) {
        throw new BadRequestError('Please provide all values')
    }

    const user = await User.create({ firstName, lastName, email, password })
    res.status(StatusCodes.CREATED).json({ user })
}

const login = async (req, res) => {
    res.send('login user')
}
const updateUser = async (req, res) => {
    res.send('update user')
}

export { register, login, updateUser }
