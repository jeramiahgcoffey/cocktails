import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'

// Using express-async-error
const register = async (req, res, next) => {
    const user = await User.create(req.body)
    res.status(StatusCodes.CREATED).json({ user })
}

const login = async (req, res) => {
    res.send('login user')
}
const updateUser = async (req, res) => {
    res.send('update user')
}

export { register, login, updateUser }
