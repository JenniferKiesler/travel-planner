// TODO: Create a Location model
const {DataTypes, Model} = require('sequelize')
const sequelize = require('../config/connection')

class Location extends Model {}

Location.init({
    location_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize
})


module.exports = Location
