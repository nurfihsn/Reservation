const reservations = [];

module.exports = {
    getAll: () => reservations,

    getById: (id) => reservations.find(r => r.id === id),

    create: (reservation) => {
        reservations.push(reservation);
        return reservation;
    },

    delete: (id) => {
        const index = reservations.findIndex(r => r.id === id);
        if (index !== -1) {
            return reservations.splice(index, 1);
        }
        return null;
    }
};