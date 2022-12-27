import { Router } from "express";
const router = Router();

import {getPosts, createPost,deletePost, updatePost,getPost} from '../controllers/posts';

router.route('/')
    .get(getPosts)
    .post(createPost);

router.route('/:postId')
    .get(getPost)
    .delete(deletePost)
    .put(updatePost);

export default router;