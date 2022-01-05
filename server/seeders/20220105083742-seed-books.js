"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = require("../data/books.json");
    data.forEach((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });
    return queryInterface.bulkInsert("books", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("books", null, {});
  },
};
