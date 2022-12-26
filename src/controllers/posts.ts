import { Request, Response } from "express";
import {connect} from '../database';
import {IPost} from '../interfaces/post';


export async function getPosts(req: Request, res: Response): Promise<Response>{
    const db = await connect();
    const posts = await db.query('SELECT * FROM posts');
    return res.json(posts[0]);
}


export async function createPost(req: Request, res: Response){
    const newPost: IPost = req.body;
    const db = await connect();
    db.query('INSERT INTO POSTS SET ?', [newPost]);
    return res.json({
        message: 'Post added'
    })
}


export async function deletePost(req: Request, res: Response){
    const id = req.params.postId;
    const db = await connect();
     await db.query('DELETE FROM posts WHERE id = ?', [id]);
    return res.json({
        message: 'Post deleted'
    })
}


export async function updatePost(req: Request, res: Response) {
    const id = req.params.postId;
    const updatePost = req.body;
    const db = await connect();
    await db.query('UPDATE posts set ? WHERE id = ?', [updatePost,id]);
    return res.json({
        message: 'Post updated'
    })
};