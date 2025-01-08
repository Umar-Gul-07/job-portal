import express from 'express';
import {emailAndPasswordValidation,validate} from "../utils/Validations.js";
import schoolController from "../controllers/schoolController.js";

const router = express.Router();

router.post('/register', emailAndPasswordValidation, validate, schoolController.register);

export default router;
