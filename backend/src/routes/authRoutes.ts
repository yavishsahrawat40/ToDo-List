import express from 'express';
import { signup, signin, forgotPassword, resetPassword } from '../controllers/authController';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/forgot-password', forgotPassword);
router.put('/reset-password/:resetToken', resetPassword);

export default router;
