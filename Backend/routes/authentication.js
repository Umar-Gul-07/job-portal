import express from 'express'
import {login, schoollogin} from '../controllers/authControllers.js';



const router = express.Router();

router.post('/login', login)
router.post('/school/login', schoollogin)

export default router;