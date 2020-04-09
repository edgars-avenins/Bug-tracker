
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('status').del()
    .then(function () {
      // Inserts seed entries
      return knex('status').insert([
        {issue_id: 100001, assigned: true, user_id: 50001},
        {issue_id: 100002, assigned: false, user_id: null},
        {issue_id: 100003, assigned: true, user_id: 50002},
        {issue_id: 100004, assigned: false, user_id: null},
        {issue_id: 100005, assigned: false, user_id: null},
        {issue_id: 100006, assigned: true, user_id: 50001},
        {issue_id: 100007, assigned: false, user_id: null},
        {issue_id: 100008, assigned: false, user_id: null},
        {issue_id: 100009, assigned: true, user_id: 50001},
        {issue_id: 100010, assigned: false, user_id: null},
        {issue_id: 100011, assigned: false, user_id: null},
        {issue_id: 100012, assigned: false, user_id: null},
        {issue_id: 100013, assigned: true, user_id: 50003},
      ]);
    });
};
