import { Router } from 'express';

import authRouter from './authRouter.js';
import commitmentRouter from './commitmentRouter.js';
import participantRouter from './participantRouter.js';

const router = Router();

router.use(authRouter);
router.use(commitmentRouter);
router.use(participantRouter);

export default router;