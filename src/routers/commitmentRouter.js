import { Router } from 'express';

import validateToken from './../middlewares/validateTokenMiddleware.js';
import validateSchema from './../middlewares/validateSchemaMiddleware.js';

import { commitmentSchema } from './../schemas/commitmentSchemas.js';

import { 
    deleteCommitment, 
    listCommitments, 
    postCommitment, 
    updateCommitment 
} from './../controllers/commitmentController.js';

const commitmentRouter = Router();

commitmentRouter.use(validateToken);

commitmentRouter.post('/commitment', validateSchema(commitmentSchema), postCommitment);
commitmentRouter.get('/commitment/:order', listCommitments);
commitmentRouter.put('/commitment/:id', validateSchema(commitmentSchema), updateCommitment);
commitmentRouter.delete('/commitment/:id', deleteCommitment);

export default commitmentRouter;