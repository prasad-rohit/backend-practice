const { fetchAllComment, createCommentDB, updateCommentDB, deleteCommentDB } = require("../db/dao/commentsDao");
const {createPostDB} = require("../db/dao/postsDao");

async function getComment(req, res){
    const post_id = req.params.postId
    try{
        const comments = await fetchAllComment({post_id})
        res.status(200).json(comments)
    }catch (e) {
        console.log("Error fetching post ",e)
        res.status(500).json({message : "Server error occurred while fetching post"})
    }
}
async function setComment(req, res){
    const user_id = req.user.userId
    const post_id = req.params.postId
    const data = {
        user_id,
        post_id,
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
async function updateComment(req, res){
    
}
async function deleteComment(req, res){
    
}

module.exports = { getComment, setComment, updateComment, deleteComment }
