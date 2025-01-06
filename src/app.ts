import express from 'express'

import { notFoundRoute } from './app/utils/notFoundRoute'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import { rootRoute } from './routes/route'

const app = express()

// parser

app.use(express.json())





// route middleware

app.use("/api/v1", rootRoute)

app.get("/", (req, res) => {
    res.send("Server is connected")
})


app.use(notFoundRoute)
app.use(globalErrorHandler)

export default app;