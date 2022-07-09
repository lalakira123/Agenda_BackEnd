import { Router } from 'express';

import authRouter from './authRouter.js';
import commitmentRouter from './commitmentRouter.js';

const router = Router();

router.use(authRouter);
router.use(commitmentRouter);

export default router;