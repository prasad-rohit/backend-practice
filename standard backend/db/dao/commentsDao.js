const Comment = require("../models/commentsModel")

async function fetchCommentByPostIdDB(data){
    const { post_id, comment_id } = data

    try{
        const fetchedPost = await Comment.findOne(
            { where:
                    { comment_id, post_id }
            }
        )
        return [fetchedPost, 200]
    }catch (e) {
        console.log("Error fetching comment ",e)
        return [{error : e}, 500]
    }
}

async function fetchAllComment(data){
    const { post_id } = data

    try{
        const fetchedComment = await Comment.findOne(
            { where: { post_id }}
        )
        return [fetchedComment, 200]
    }catch (e) {
        console.log("Error fetching comments ",e)
        return [{error : e}, 500]
    }
}

async function createCommentDB(data){
    const { post_id, content } = data

    try{
        const createdComment = await Comment.create({
            post_id,
            content
        })
        return [createdComment, 200]
    }catch (e) {
        console.log("Error creating comments ",e)
        return [{error : e}, 500]
    }
}

async function updateCommentDB(data){
    const { user_id, post_id, comment_id, comment_content } = data
    try{
        const comment = await fetchCommentByPostIdDB({ user_id, post_id, comment_id })
        if(!comment[0]){
            return [{ message: "Unauthorized user or comment not found"}, 400]
        }
        const [affectedRowsCount] = await Comment.update({ content: comment_content }, { where : { user_id, post_id, comment_id } });
        if (affectedRowsCount === 0) {
            return [{ message: "Post not found" }, 404];
        }
        const updatedPost = await Comment.findOne({ where: { comment_id } });
        return [updatedPost, 200];
    }catch (e) {
        console.log("Error updating post ",e)
        return [{error : e}, 500]
    }
}

async function deleteCommentDB(data){
    const { user_id, post_id } = data
    if(!user_id){
        return [{ message: "Unauthorized"}, 401]
    }

    try{
        const deleted_post = await Posts.destroy({ where: {post_id}})
        return [{ message: `Post deleted ${deleted_post}`}, 200]
    }catch (e) {
        return [{ message: "Error occurred while deleting post"}, 500]
    }
}

module.exports = { fetchAllComment, createCommentDB, updateCommentDB, deleteCommentDB }
