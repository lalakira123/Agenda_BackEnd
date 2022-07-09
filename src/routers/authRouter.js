import { Router } from 'express';

import { signIn, signUp } from './../controllers/authController.js';

import validateSchema from './../middlewares/validateSchemaMiddleware.js';

import { signUpSchema, signInSchema } from './../schemas/authSchemas.js';

const authRouter = Router();

authRouter.post('/signup', validateSchema(signUpSchema), signUp);
authRouter.post('/signin', validateSchema(signInSchema), signIn);

export default authRouter;