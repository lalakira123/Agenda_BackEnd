import BaseJoi from 'joi';
import JoiTimezone from 'joi-tz';

const Joi = BaseJoi.extend(JoiTimezone);

export const commitmentSchema = Joi.object({
    type: Joi.string().required(),
    place: Joi.string().required(),
    startHour: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/),
    finishHour: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/),
    alarmHour: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/),
    date: Joi.date().required()
});