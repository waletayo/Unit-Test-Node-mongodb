const Post = require("../model/testmodel");


exports.create_post = async (req, res, next) => {
    const _body_ = req.body;
    const create_post = await new Post(_body_);
    const save_post = await create_post.save();
    if (save_post) {
        return res.status(201)
            .json(save_post);
    }
};

exports.findOnePost = async (req, res, next) => {
    const post_id = req.query.post_id;
    const find_one_post = await Post.findOne({postId: post_id});
    if (find_one_post) {
        return res.status(200)
            .json(find_one_post)
    } else {
        return res.status(400)
            .json('Invalid post id')
    }
};
exports.updatePost = async (req, res, next) => {
    const find_post = await Post.findOne({postId: req.query.post_id})
    if (find_post) {
        Object.assign(find_post, req.body)
        await find_post.save();
        return res.status(200)
            .json(find_post)
    } else {
        return res.status(400)
            .json('Oops! an error occurr')
    }

};

exports.delete_post = async (req, res, next) => {
    const delete_post = await Post.findOneAndDelete(req.query.post_id);
    if (delete_post) {
        return res.status(200)
            .json(null)
    } else {
        return res.status(400)
            .json('Oops! an error occurr')
    }

};