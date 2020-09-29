const express = require("express");
const router = express.Router();
const Post = require("../controller/postcontroller");


router.post("/create/post", Post.create_post);
router.get("/post/one", Post.findOnePost);
router.put("/post/edit", Post.updatePost);
router.delete("/post/delete", Post.delete_post);


module.exports = router