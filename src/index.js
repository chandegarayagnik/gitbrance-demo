import express from "express"
import "dotenv/config"

const app = express()
const port = process.env.PORT

app.get("/", (req, res) => {
    res.json({ message: "Hello" })
})

app.listen(port, () => {
    console.log(`Server Running At : ${port}`);
})