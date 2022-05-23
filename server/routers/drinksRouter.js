import express from 'express'
import {
  createDrink,
  editDrink,
  deleteDrink,
  getUserDrinks,
  getAllDrinks,
} from '../controllers/drinksController.js'

const router = express.Router()

router.route('/').post(createDrink).get(getAllDrinks)
router.route('/:id').delete(deleteDrink).patch(editDrink)
router.route('/user').get(getUserDrinks)

export default router
