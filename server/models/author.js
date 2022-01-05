"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class author extends Model {
    static associate(models) {
      // define association here
      author.hasMany(models.book, { foreignKey: "author_id" });
    }
  }
  author.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "author",
    }
  );
  return author;
};
