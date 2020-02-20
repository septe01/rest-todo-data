"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert(
      "todos",
      [
        {
          title: "faisal walking with ajis",
          is_done: true,
          created_by: 1,
          createdAt: "0000-00-00",
          updatedAt: "0000-00-00"
        },
        {
          title: "faisal walking with akbar",
          is_done: true,
          created_by: 3,
          createdAt: "0000-00-00",
          updatedAt: "0000-00-00"
        },
        {
          title: "faisal walking with bagas",
          is_done: true,
          created_by: 2,
          createdAt: "0000-00-00",
          updatedAt: "0000-00-00"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("todo", null, {});
  }
};
