const express = require("express")
const app = express()
const port = 3000

// import static assets
app.use(express.static("public"))
// importo le midleware per la lettura del request body
app.use(express.json())

//import rout
const postsRouter = require("./routers/posts")

app.listen(port, () => {
    console.log(`the blog server is run to port http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send("welcome to blog server")
})

//uso le rout importate
app.use("/api/v1/posts", postsRouter)