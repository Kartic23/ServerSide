"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.createUser = exports.getUserId = exports.getUserEmail = exports.getUsers = void 0;
const database_1 = require("../database");
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, database_1.connect)();
        const users = yield db.query('SELECT * FROM users');
        return res.json(users[0]);
    });
}
exports.getUsers = getUsers;
function getUserEmail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, database_1.connect)();
        const email = req.params.email;
        const user = yield db.query('SELECT * FROM users WHERE email = ?', [email]);
        return res.json(user[0]);
    });
}
exports.getUserEmail = getUserEmail;
function getUserId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, database_1.connect)();
        const userId = req.params.userId;
        const user = yield db.query('SELECT * FROM users WHERE id = ?', [userId]);
        return res.json(user[0]);
    });
}
exports.getUserId = getUserId;
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = req.body;
        const db = yield (0, database_1.connect)();
        yield db.query('INSERT INTO users SET ?', [newUser]);
        console.log(newUser);
        return res.json({
            message: 'User added'
        });
    });
}
exports.createUser = createUser;
;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.userId;
        const db = yield (0, database_1.connect)();
        yield db.query('DELETE FROM users WHERE id = ?', [id]);
        return res.json({
            message: 'User deleted'
        });
    });
}
exports.deleteUser = deleteUser;
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.userId;
        const updateUser = req.body;
        const db = yield (0, database_1.connect)();
        yield db.query('UPDATE users set ? WHERE id = ?', [updateUser, id]);
        return res.json({
            message: 'User updated'
        });
    });
}
exports.updateUser = updateUser;
;
