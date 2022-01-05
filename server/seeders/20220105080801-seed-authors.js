"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = require("../data/authors.json");
    data.forEach((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });
    return queryInterface.bulkInsert("authors", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("authors", null, {});
  },
};
