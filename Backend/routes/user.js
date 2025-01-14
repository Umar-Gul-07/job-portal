import express from 'express';
import UserController from '../controllers/userController.js';
import {emailAndPasswordValidation, validate} from '../utils/Validations.js';

const router = express.Router();

router.get('/get_all_users', UserController.getAllUsers);
router.get('/get_user_by_id/:id', UserController.getUserById);
router.get('/get_all_information', UserController.get_all_information);
router.get('/get_user_profile/:id', UserController.getProfile);
router.post('/register', emailAndPasswordValidation, validate, UserController.register);
router.put('/update_user_by_id/:id', UserController.updateUserById);
router.put('/update_user_profile/:id', UserController.updateProfile);
router.delete('/delete/:id', UserController.deleteDocById);

export default router;
