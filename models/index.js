// TODO: require in all models here
const Traveller = require('./traveller')
const Location = require('./location')
const Trip = require('./trips')

// TODO: set up model associations here
Traveller.hasMany(Trip, {
    foreignKey: 'traveller_id'
})

Trip.belongsTo(Traveller, {
    foreignKey: 'traveller_id'
})

Location.hasMany(Trip, {
    foreignKey: 'location_id'
})

Trip.belongsTo(Location, {
    foreignKey: 'location_id'
})

// TODO: export all models in an object
module.exports = {
    Traveller,
    Location,
    Trip
}