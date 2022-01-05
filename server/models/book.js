'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  book.init({
    name: DataTypes.STRING,
    author_id: DataTypes.INTEGER,
    isbn: DataTypes.STRING,
    publisher_name: DataTypes.STRING,
    series: DataTypes.STRING,
    revision: DataTypes.STRING,
    published_at: DataTypes.DATE,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};