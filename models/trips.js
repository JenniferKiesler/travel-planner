// TODO: create a Trip model
const {DataTypes, Model} = require('sequelize')
const sequelize = require('../config/connection')

class Trip extends Model {}

Trip.init({
    trip_budget: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    traveller_amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    traveller_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'travellers',
            key: 'id',
            unique: false
        }
    },
    location_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'locations',
            key: 'id',
            unique: false
        }
    },
}, {
    sequelize
})


module.exports = Trip