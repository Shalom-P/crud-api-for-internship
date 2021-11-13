import express from "express";

import {getposts,postPosts,getPost,deletepost,updatepost} from "../controllers/posts.js";



const router = express.Router();



router.get('/',getposts);

router.post('/',postPosts);

router.get('/:id',getPost);
router.delete('/:id',deletepost);
router.patch('/:id',updatepost);

export default router;