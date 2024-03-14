const { fetchAllPost, createPostDB, updatePostDB, deletePostDB } = require("../db/dao/postsDao")

async function getPost(req, res){
    const post_id = req.params.pid
    try{
        const posts = await fetchAllPost({post_id})
        posts[0]["content"] = posts[0]["content"].toString()
        res.status(200).json(posts)
    }catch (e) {
        console.log("Error fetching post ",e)
        res.status(500).json({message : "Server error occurred while fetching post"})
    }
}

async function createPost(req, res){
    const user_id = req.user.userId
    const data = {
        user_id,
        content: req.body.content
    }
    
    if(!user_id){
        res.status(404).json({ message : "Invalid user"})
    }
    try{
        const post = await createPostDB(data)
        res.status(201).json(post)
    }catch (e) {
        console.log("Error creating post ",e)
        res.status(500).json({message : "Server error occurred while creating post"})
    }
}

async function updatePost(req, res){
    const user_id = req.user.userId
    const post_id = parseInt(req.params.pid)
    const post_content = req.body.content
    if(!post_id){
        res.status(404).json({message: "No post found"})
    }
    
    try{
        const post = await updatePostDB({ user_id, post_id, post_content })
        res.status(200).json(post)
    }catch (e) {
        console.log("Error updating post ",e)
        res.status(500).json({message : "Server error occurred while updating post"})
    }
}

async function deletePost(req, res){
    const user_id = req.user.userId
    const post_id = parseInt(req.params.pid)
    if(!post_id){
        res.status(404).json({message: "No post found"})
    }
    try{
        const post = await deletePostDB({ user_id, post_id })
        res.status(200).json(post)
    }catch (e) {
        console.log("Error updating post ",e)
        res.status(500).json({message : "Server error occurred while deleting post"})
    }
}

module.exports = { getPost, createPost, updatePost, deletePost }
