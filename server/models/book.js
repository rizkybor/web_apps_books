"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    static associate(models) {
      // define association here
      book.belongsTo(models.author, { foreignKey: "author_id" });
    }
  }
  book.init(
    {
      name: DataTypes.STRING,
      author_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      isbn: DataTypes.STRING,
      publisher_name: DataTypes.STRING,
      series: DataTypes.STRING,
      revision: DataTypes.STRING,
      published_at: DataTypes.DATE,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "book",
    }
  );
  return book;
};
