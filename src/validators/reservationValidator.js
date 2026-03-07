const Joi = require("joi");

const reservationSchema = Joi.object({
    guestName: Joi.string().min(3).max(100).required(),
    roomNumber: Joi.number().integer().min(1).required(),
    checkInDate: Joi.date().required(),
    checkOutDate: Joi.date().greater(Joi.ref('checkInDate')).required()
});

module.exports = reservationSchema;