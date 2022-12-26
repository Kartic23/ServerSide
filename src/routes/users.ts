import { channel } from "diagnostics_channel";
import { Router } from "express";

const router = Router();

import {getUsers,createUser,deleteUser,updateUser,getUser, Check_login} from '../controllers/users';

router.route('/')
    .get(getUsers)
    .post(createUser);


router.route('/:userId')
    .delete(deleteUser)
    .put(updateUser);


router.route('/:email/:password')
    .get(Check_login);

router.route('/:email')
    .get(getUser);
 



export default router;