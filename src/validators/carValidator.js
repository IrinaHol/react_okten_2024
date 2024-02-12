import Joi from 'joi'

const carValidator = Joi.object({
    brand:Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min': 'min 0',
        'number.max': 'max 1000000'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
})

export {
    carValidator
}