import Joi from 'joi';

const participantSchema = Joi.object({
    commitmentId: Joi.number().required(),
    name: Joi.string().required(),
    email: Joi.string().email().required()
})

export default participantSchema;