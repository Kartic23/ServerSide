"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const users_1 = require("../controllers/users");
router.route('/')
    .get(users_1.getUsers)
    .post(users_1.createUser);
router.route('/:userId')
    .delete(users_1.deleteUser)
    .put(users_1.updateUser);
router.route('/:email')
    .get(users_1.getUserEmail);
router.route('/id/:userId')
    .get(users_1.getUserId);
exports.default = router;
