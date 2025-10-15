const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// GET
router.get("/", postController.getAllPosts);
router.get("/post/:id", postController.getPostById);
router.get("/new", postController.getNewPostForm);
router.get("/edit/:id", postController.getEditPostForm);

// POST
router.post("/new", postController.createPost);
router.post("/edit/:id", postController.updatePost);
router.post("/delete/:id", postController.deletePost);

module.exports = router;

