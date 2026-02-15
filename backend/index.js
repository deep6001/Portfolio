import express from "express"

import dotenv from "dotenv"

import cors from "cors"
import contactRoute from './Routes/contactRoute.js'
import trackingRoute from './Routes/trackingRoute.js'
import analyticsRoute from './Routes/analyticsRoute.js'
import ConnectDB from "./Config/db.js"

dotenv.config()


ConnectDB();

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/contact', contactRoute)
app.use('/api/track', trackingRoute)
app.use('/api/analytics', analyticsRoute)

const PORT = process.env.PORT || 5000


app.get('/', (req, res) => {
    res.send("hellom world")
})
app.listen(PORT, () => {
    console.log(`server start on Port:-${PORT}`)
})



