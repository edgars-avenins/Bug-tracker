
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('issues').del()
    .then(function () {
      // Inserts seed entries
      return knex('issues').insert([
        {id: 100001, user_id: 50001, project_id: 10001, name: 'Margin around content is too small.', description: 'Page look feels weird as the content is so close up to the edges.'},
        {id: 100002, user_id: 50001, project_id: 10001, name: 'Margin around content is too small.', description: 'Page look feels weird as the content is so close up to the edges.'},
        {id: 100003, user_id: 50002, project_id: 10001, name: 'Margin around content is too small.', description: 'Page look feels weird as the content is so close up to the edges.'},
        {id: 100004, user_id: 50002, project_id: 10002, name: 'Margin around content is too small.', description: 'Page look feels weird as the content is so close up to the edges.'},
        {id: 100005, user_id: 50002, project_id: 10002, name: 'Margin around content is too small.', description: 'Page look feels weird as the content is so close up to the edges.'},
        {id: 100006, user_id: 50001, project_id: 10003, name: 'Margin around content is too small.', description: 'Page look feels weird as the content is so close up to the edges.'},
        {id: 100007, user_id: 50002, project_id: 10003, name: 'Margin around content is too small.', description: 'Page look feels weird as the content is so close up to the edges.'},
        {id: 100008, user_id: 50003, project_id: 10003, name: 'Margin around content is too small.', description: 'Page look feels weird as the content is so close up to the edges.'},
        {id: 100009, user_id: 50001, project_id: 10001, name: 'Margin around content is too small.', description: 'Page look feels weird as the content is so close up to the edges.'},
        {id: 100010, user_id: 50001, project_id: 10004, name: 'Margin around content is too small.', description: 'Page look feels weird as the content is so close up to the edges.'},
        {id: 100011, user_id: 50003, project_id: 10004, name: 'Margin around content is too small.', description: 'Page look feels weird as the content is so close up to the edges.'},
        {id: 100012, user_id: 50003, project_id: 10001, name: 'Margin around content is too small.', description: 'Page look feels weird as the content is so close up to the edges.'},
        {id: 100013, user_id: 50003, project_id: 10005, name: 'Margin around content is too small.', description: 'Page look feels weird as the content is so close up to the edges.'}
      ]);
    });
};
