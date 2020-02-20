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
      "users",
      [
        {
          email: "ajis@gmil.com",
          password: "ajis@gmil.com",
          name: "ajis",
          createdAt: "0000-00-00",
          updatedAt: "0000-00-00"
        },
        {
          email: "faisal@gmil.com",
          password: "faisal@gmil.com",
          name: "faisal",
          createdAt: "0000-00-00",
          updatedAt: "0000-00-00"
        },
        {
          email: "ajis@gmil.com",
          password: "ajis@gmil.com",
          name: "ajis",
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
    return queryInterface.bulkDelete("users", null, {});
  }
};
