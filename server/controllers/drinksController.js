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
    const drinks = await Drink.find({ createdBy: req.user.userId })
    res.status(StatusCodes.OK).json({
        drinks,
        totalDrinks: drinks.length,
        numPages: 1,
    })
}
const getAllDrinks = async (req, res) => {
    const all = await Drink.find()
    res.status(StatusCodes.OK).json({
        all,
        totalDrinks: all.length,
        numPages: 1,
    })
}

export { createDrink, editDrink, deleteDrink, getUserDrinks, getAllDrinks }
