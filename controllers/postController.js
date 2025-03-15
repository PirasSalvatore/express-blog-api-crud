const posts = require("../data/posts")

//index (read)
function index(req, res) {

    let postsFiltered = posts
    const filter = req.query.tags

    if (filter) {
        postsFiltered = posts.filter(post => post.tags.includes(filter))
    }

    res.json(postsFiltered)
}

//show (read)
function show(req, res) {

    const postSlug = req.params.Slug

    const post = posts.find((post) => post.slug === postSlug)

    if (!post) {

        return res.status(404).json({
            error: "404 NOT FOUD",
            messege: "post not found"
        })
    }

    res.json(post);
}

//store (create)
function store(req, res) {
    res.send("store a new post")
}

//update (update)
function update(req, res) {
    const postSlug = req.params.Slug
    res.send(`update your post have Slug : ${postSlug}`);
}

//partial update (modify)
function modify(req, res) {
    const postSlug = req.params.Slug
    res.send(`modify your post have Slug : ${postSlug}`);
}

//delete (delete)
function destroy(req, res) {

    const postSlug = req.params.Slug

    const post = posts.find((post) => post.slug === postSlug)

    if (!post) {

        return res.status(404).json({
            error: "404 NOT FOUD",
            messege: "post not found"
        })
    }


    posts.splice(posts.indexOf(post), 1)

    console.log(posts);

    res.sendStatut(204);
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}