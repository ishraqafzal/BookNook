import express from 'express';
import { createMsg } from '../controller/msg.controller.js';

const router = express.Router();

router.post('/message', createMsg);  

export default router;