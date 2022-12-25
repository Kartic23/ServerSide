import { Router } from "express";
const router = Router();

import {getPosts, createPost,deletePost, updatePost} from '../controllers/posts';

router.route('/')
    .get(getPosts)
    .post(createPost);

router.route('/:postId')
    .delete(deletePost)
    .put(updatePost);

export default router;