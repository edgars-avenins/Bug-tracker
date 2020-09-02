
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 50001, first_name: 'Edgars', last_name: 'Avenins', email: 'edgars.avenins@gmail.com', hash: '1234567890'},
        {id: 50002, first_name: 'Zanda', last_name: 'Zvidrina', email: 'zanda.zvidrina@gmail.com', hash: '1234567890'},
        {id: 50003, first_name: 'Andreas', last_name: 'Burklan', email: 'eave1991@gmail.com', hash: '1234567890'},
      ]);
    });
};
