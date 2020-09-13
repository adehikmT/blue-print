"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class duty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  duty.init(
    {
      userId: DataTypes.INTEGER,
      videoReference: DataTypes.STRING,
      img: DataTypes.STRING,
      startDate: DataTypes.DATE,
      dueDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "duty",
    }
  );
  return duty;
};
