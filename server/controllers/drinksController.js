import Drink from '../models/Drink.js'
import { StatusCodes } from 'http-status-codes'

const createDrink = async (req, res) => {
    const { name, imageURL, ingredients, tags, instructions } = req.body
    const drink = await Drink.create({
        name,
        imageURL,
        ingredients,
        tags,
        instructions,
        createdBy: req.user.userId,
    })

    res.status(StatusCodes.CREATED).json({
        drink,
    })
}
const editDrink = async (req, res) => {
    res.send('edit drink')
}
const deleteDrink = async (req, res) => {
    res.send('delete drink')
}
const getUserDrinks = async (req, res) => {
    res.send('get user drinks')
}
const getAllDrinks = async (req, res) => {
    res.send('get all drinks')
}

export { createDrink, editDrink, deleteDrink, getUserDrinks, getAllDrinks }
