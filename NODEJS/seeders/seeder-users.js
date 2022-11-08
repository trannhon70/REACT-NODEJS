'use strict';

module.exports = {
  
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName:'kevintran',
      password:'123456',
      lastName: 'nhon',
      email: 'a@gmail.com',
      address: 'VN',
      gender: 1,
      typeRole: 'ROLE',
      keyRole: 'R1',

      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
