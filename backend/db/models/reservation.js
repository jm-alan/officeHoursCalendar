'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, { DataTypes, fn }) => {
  class Reservation extends Model {}

  Reservation.init({
    day: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    studentName: DataTypes.STRING(50),
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: fn('now')
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: fn('now')
    }
  }, {
    sequelize,
    modelName: 'Reservation'
  });

  return Reservation;
};
