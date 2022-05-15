import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnauthenticatedError } from '../errors/index.js'

// Using express-async-error catching
const register = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body

    if (!firstName || !lastName || !email || !password) {
        throw new BadRequestError('Please provide all values')
    }

    const user = await User.create({ firstName, lastName, email, password })
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({
        user: { firstName, lastName, email },
        token,
    })
}

const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email }).select('+password')
    if (!user) {
        throw new UnauthenticatedError(
            `There is no account associated with ${email}`
        )
    }
    const validPassword = await user.comparePassword(password)
    if (!validPassword) {
        throw new UnauthenticatedError('Invalid Credentials')
    }
    const token = user.createJWT()
    user.password = undefined
    res.status(StatusCodes.OK).json({ user, token })
}
const updateUser = async (req, res) => {
    res.send('update user')
}

export { register, login, updateUser }
