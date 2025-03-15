const express = require("express")
const app = express()
const port = 3000

//import rout
const postsRouter = require("./routers/posts")

// import static assets
app.use(express.static("public"))

app.listen(port, () => {
    console.log(`the blog server is run to port http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send("welcome to blog server")
})

//uso le rout importate
app.use("/api/v1/posts", postsRouter)