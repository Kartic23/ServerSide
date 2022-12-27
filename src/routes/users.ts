import { channel } from "diagnostics_channel";
import { Router } from "express";

const router = Router();

import {getUsers,createUser,deleteUser,updateUser,getUserEmail,getUserId} from '../controllers/users';

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:userId')
    .delete(deleteUser)
    .put(updateUser);


router.route('/:email')
    .get(getUserEmail);

router.route('/id/:userId')
    .get(getUserId);
 



export default router;