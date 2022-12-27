"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const posts_1 = require("../controllers/posts");
router.route('/')
    .get(posts_1.getPosts)
    .post(posts_1.createPost);
router.route('/:postId')
    .get(posts_1.getPost)
    .delete(posts_1.deletePost)
    .put(posts_1.updatePost);
exports.default = router;
