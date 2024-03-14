const Posts = require("../models/postsModel")

async function fetchPostByUserIdDB(data){
    const { user_id, post_id } = data
    
    try{
        const fetchedPost = await Posts.findOne(
            { where:
                    { user_id, post_id } 
            }
        )
        return [fetchedPost, 200]
    }catch (e) {
        console.log("Error fetching post ",e)
        return [{error : e}, 500]
    }
}

async function fetchAllPost(data){
    const { post_id } = data

    try{
        const fetchedPost = await Posts.findOne(
            { where: { post_id }}
        )
        return [fetchedPost, 200]
    }catch (e) {
        console.log("Error fetching post ",e)
        return [{error : e}, 500]
    }
}

async function createPostDB(data){
    const { user_id, content } = data
    
    try{
        const createdPost = await Posts.create({
            user_id,
            content
        })
        return [createdPost, 200]
    }catch (e) {
        console.log("Error creating post ",e)
        return [{error : e}, 500]
    }
}

async function updatePostDB(data){
    const { user_id, post_id, post_content } = data
    try{
        const post = await fetchPostByUserIdDB({ user_id, post_id})
        if(!post[0]){
            return [{ message: "Unauthorized user or post not found"}, 400]
        }
        const [affectedRowsCount] = await Posts.update({ content: post_content }, { where : { post_id, user_id } });
        if (affectedRowsCount === 0) {
            return [{ message: "Post not found" }, 404];
        }
        const updatedPost = await Posts.findOne({ where: { post_id } });
        return [updatedPost, 200];
    }catch (e) {
        console.log("Error updating post ",e)
        return [{error : e}, 500]
    }
}

async function deletePostDB(data){
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

module.exports = { createPostDB, fetchAllPost, updatePostDB, deletePostDB }
