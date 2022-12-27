import { Request, Response } from "express";

import {connect} from '../database';
import {IUser} from '../interfaces/user';


export async function getUsers(req: Request, res: Response): Promise<Response>{
    const db = await connect();
    const users = await db.query('SELECT * FROM users');
    return res.json(users[0]);
}

export async function getUserEmail(req: Request, res: Response){
    const db = await connect();
    const email = req.params.email;
    const user = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    return res.json(user[0]);
}

export async function getUserId(req: Request, res: Response){
    const db = await connect();
    const userId = req.params.userId;
    const user = await db.query('SELECT * FROM users WHERE id = ?', [userId]);
    return res.json(user[0]);
}


export async function createUser(req: Request, res: Response){
    const newUser: IUser = req.body;
    const db = await connect();
    await db.query('INSERT INTO users SET ?', [newUser]);
    console.log(newUser);
    return res.json({
        message: 'User added'
    })
};


export async function deleteUser(req: Request, res: Response){
    const id = req.params.userId;
    const db = await connect();
    await db.query('DELETE FROM users WHERE id = ?', [id]);
    return res.json({
        message: 'User deleted'
    })
}


export async function updateUser(req: Request, res: Response) {
    const id = req.params.userId;
    const updateUser = req.body;
    const db = await connect();
    await db.query('UPDATE users set ? WHERE id = ?', [updateUser,id]);
    return res.json({
        message: 'User updated'
    })
};