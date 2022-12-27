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
exports.updatePost = exports.deletePost = exports.createPost = exports.getPost = exports.getPosts = void 0;
const database_1 = require("../database");
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, database_1.connect)();
        const posts = yield db.query('SELECT * FROM posts');
        return res.json(posts[0]);
    });
}
exports.getPosts = getPosts;
function getPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const db = yield (0, database_1.connect)();
        const posts = yield db.query('SELECT * FROM posts WHERE id = ?', [id]);
        return res.json(posts[0]);
    });
}
exports.getPost = getPost;
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPost = req.body;
        const db = yield (0, database_1.connect)();
        db.query('INSERT INTO POSTS SET ?', [newPost]);
        return res.json({
            message: 'Post added'
        });
    });
}
exports.createPost = createPost;
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const db = yield (0, database_1.connect)();
        yield db.query('DELETE FROM posts WHERE id = ?', [id]);
        return res.json({
            message: 'Post deleted'
        });
    });
}
exports.deletePost = deletePost;
function updatePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const updatePost = req.body;
        const db = yield (0, database_1.connect)();
        yield db.query('UPDATE posts set ? WHERE id = ?', [updatePost, id]);
        return res.json({
            message: 'Post updated'
        });
    });
}
exports.updatePost = updatePost;
;
