import { Router } from 'express';

import validateToken from './../middlewares/validateTokenMiddleware.js';
import validateSchema from './../middlewares/validateSchemaMiddleware.js';

import { commitmentSchema } from './../schemas/commitmentSchemas.js';

import { listCommitments, postCommitment } from './../controllers/commitmentController.js';

const commitmentRouter = Router();

commitmentRouter.use(validateToken);

commitmentRouter.post('/commitment', validateSchema(commitmentSchema), postCommitment);
commitmentRouter.get('/commitment/:order', listCommitments);
commitmentRouter.put('/commitment/:id');
commitmentRouter.delete('/commitment/:id');

export default commitmentRouter;