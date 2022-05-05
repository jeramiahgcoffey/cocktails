const createDrink = async (req, res) => {
    res.send('create drink')
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
