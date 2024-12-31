import express from 'express'
import path from 'path'
import { notFoundRoute } from './app/utils/notFoundRoute'

const app = express()

// parser

app.use(express.json())
app.use( express.static(path.join(__dirname,"../src/public")))
app.use(express.urlencoded({extended: true, limit: "1000kb"}))

app.patch("/user", (req, res) => {
    console.log(req.body);
    res.send(req.body)
})



app.use(notFoundRoute)

export default app;