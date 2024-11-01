'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('persons', [

      {
        first_name: 'Mike',
        last_name: 'Smith',
        bapt_date: '10/27/2024',
        testimony: 'This is the testimony of Mike Smith. Amen.',
        image: '',
        gender: 'male'
      },
      {
        first_name: 'John',
        last_name: 'Michael',
        bapt_date: '10/20/2024',
        testimony: 'This is the testimony of John Michael. Amen.',
        image: '',
        gender: 'male'
      },
      {
        first_name: 'Sydney',
        last_name: 'Todd',
        bapt_date: '10/13/2024',
        testimony: 'This is the testimony of Sydney Todd. Amen.',
        image: '',
        gender: 'female'
      },
      {
        first_name: 'Sally',
        last_name: 'Johns',
        bapt_date: '10/6/2024',
        testimony: 'This is the testimony of Sally Johns. Amen.',
        image: '',
        gender: 'female'
      }
      
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('persons', null, {})
  }
};
