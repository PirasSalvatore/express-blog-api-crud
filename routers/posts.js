const express = require("express")
const posts = require("../files/posts")
const router = express.Router()

router.use(express.static("files"))

//index (read)
router.get("/", (req, res) => {
    res.json(posts)
})

//show (read)
router.get("/:Slug", (req, res) => {
    const postSlug = req.params.Slug
    res.json(posts.find((post) => post.slug === postSlug));
})

//store (create)
router.post("/", (req, res) => {
    res.send("store a new post")
})

//update (update)
router.put("/:Slug", (req, res) => {
    const postSlug = req.params.Slug
    res.send(`update your post have Slug : ${postSlug}`);
})

//partial update (update)
router.patch("/:Slug", (req, res) => {
    const postSlug = req.params.Slug
    res.send(`modify your post have Slug : ${postSlug}`);
})

//delete (delete)
router.delete("/:Slug", (req, res) => {
    const postSlug = req.params.Slug
    res.send(`delete your post have Slug : ${postSlug}`);
})

module.exports = router