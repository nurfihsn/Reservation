const { v4: uuidv4 } = require("uuid");
const reservationModel = require("../models/reservationModel");

exports.createReservation = (req, res) => {
    const reservation = {
        id: uuidv4(),
        ...req.body
    };

    reservationModel.create(reservation);

    res.status(201).json({
        status: "success",
        data: reservation
    });
};

exports.getReservations = (req, res) => {
    const reservations = reservationModel.getAll();

    res.json({
        status: "success",
        data: reservations
    });
};

exports.getReservationById = (req, res) => {
    const reservation = reservationModel.getById(req.params.id);

    if (!reservation) {
        return res.status(404).json({
            message: "Reservation not found"
        });
    }

    res.json(reservation);
};

exports.deleteReservation = (req, res) => {
    const result = reservationModel.delete(req.params.id);

    if (!result) {
        return res.status(404).json({
            message: "Reservation not found"
        });
    }

    res.json({
        message: "Reservation deleted"
    });
};