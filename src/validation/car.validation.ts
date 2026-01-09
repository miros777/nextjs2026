import Joi from 'joi';

export const carSchema = Joi.object({
    brand: Joi.string()
        .min(3)
        .max(30)
        .required(),

    price: Joi.number()
        .required()
        .min(1)
        .max(1000000),

    year: Joi.number()
        .required()
        .min(1800)
        .max(new Date().getFullYear())
})
