
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('details').del()
    .then(function () {
      // Inserts seed entries
      return knex('details').insert([
        {id: 200001, priority: 'Low', issue_id: 100001},
        {id: 200002, priority: 'Very Low', issue_id: 100002},
        {id: 200003, priority: 'Medium', issue_id: 100003},
        {id: 200004, priority: 'High', issue_id: 100004},
        {id: 200005, priority: 'Very High', issue_id: 100005},
        {id: 200006, priority: 'Urgent', issue_id: 100006},
        {id: 200007, priority: 'Very Low', issue_id: 100007},
        {id: 200008, priority: 'Low', issue_id: 100008},
        {id: 200009, priority: 'Low', issue_id: 100009},
        {id: 200010, priority: 'Urgent', issue_id: 100010},
        {id: 200011, priority: 'High', issue_id: 100011},
        {id: 200012, priority: 'Very High', issue_id: 100012},
        {id: 200013, priority: 'Medium', issue_id: 100013},
      ]);
    });
};
