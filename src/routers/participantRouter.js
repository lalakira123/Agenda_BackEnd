import { Router } from 'express';

import validateToken from './../middlewares/validateTokenMiddleware.js';
import validateSchema from './../middlewares/validateSchemaMiddleware.js';

import participantSchema from './../schemas/participantSchema.js';
import { commitmentIdSchema } from './../schemas/commitmentSchemas.js';

import { deleteParticipant, listParticipants, postParticipant } from '../controllers/participantController.js';

const participantRouter = Router();

participantRouter.use(validateToken);

participantRouter.post('/participant', validateSchema(participantSchema), postParticipant);
participantRouter.get('/participant', validateSchema(commitmentIdSchema), listParticipants);
participantRouter.delete('/participant/:id', deleteParticipant);

export default participantRouter;