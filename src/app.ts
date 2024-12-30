import express from 'express'

const app = express()


app.get("/", (req, res) => {

    res.json({message: "server is connected"})
})

app.post("/user", (req, res) => {
    
})



export default app;