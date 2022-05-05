import express from 'express'
import 'express-async-errors'
import connectDB from './db/connect.js'
import authRouter from './routers/authRouter.js'
import drinksRouter from './routers/drinksRouter.js'
import 'dotenv/config'
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/drinks', drinksRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
// ************************************* //
const port = process.env.PORT || 4500

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is running on port ${port}...`)
        })
    } catch (error) {
        console.error(error)
    }
}

start()
