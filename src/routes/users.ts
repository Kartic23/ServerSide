import { Router } from "express";
const router = Router();

import {getUsers,createUser,deleteUser,updateUser} from '../controllers/users';

router.route('/')
    .get(getUsers)
    .post(createUser);


router.route('/:userId')
    .delete(deleteUser)
    .put(updateUser);
    
export default router;
