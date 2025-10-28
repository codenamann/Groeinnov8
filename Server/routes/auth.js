import express from 'express';
import { loginUser, registerEmail, verifyOTP } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerEmail);
router.post('/verify-otp', verifyOTP);

export default router;