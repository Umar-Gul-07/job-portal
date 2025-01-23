import express from 'express';
import {emailAndPasswordValidation,validate} from "../utils/Validations.js";
import schoolController from "../controllers/schoolController.js";

const router = express.Router();

router.get('/get/job', schoolController.getJob);
router.get('/get/applied-candidate', schoolController.getappliedcandidate);
router.post('/register', emailAndPasswordValidation, validate, schoolController.register);
router.post('/add/job', schoolController.addJob);

export default router;
