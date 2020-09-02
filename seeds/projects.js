
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 10001, user_id: 50001, name: 'Bug Tracker', description: 'App that helps you track issues with your project.'},
        {id: 10002, user_id: 50001, name: 'Cheapest Option', description: 'App that helps you to choose which shop to go to.'},
        {id: 10003, user_id: 50002, name: 'Google Maps Earthquake', description: 'App that shows you on a map where recent natural events have occured.'},
        {id: 10004, user_id: 50003, name: 'Stonks & News', description: 'App that give you an insight on biggest fluctuations in the stock market and the corresponding news.'},
        {id: 10005, user_id: 50002, name: 'NASA API', description: 'App that shows you information about stellar objects that pass close to earth.'},
      ]);
    });
};
