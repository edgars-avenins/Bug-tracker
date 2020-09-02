
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('issues').del()
    .then(function () {
      // Inserts seed entries
      return knex('issues').insert([
        {id: 100001, user_id: 50001, project_id: 10001, name: 'Margin around content is too small.', description: 'Page look feels weird as the content is so close up to the edges.'},
        {id: 100002, user_id: 50001, project_id: 10001, name: 'Change Font.', description: 'Current fonts looks ugly.'},
        {id: 100003, user_id: 50002, project_id: 10001, name: 'Find more suitable Logo.', description: 'Logo doesnt represent the website.'},
        {id: 100004, user_id: 50002, project_id: 10002, name: 'Positioning of user acces buttons.', description: 'Sign up and Log in buttons are not vertically aligned.'},
        {id: 100005, user_id: 50002, project_id: 10002, name: 'Find professional colour combinations.', description: 'Background colours are have too great contrast.'},
        {id: 100006, user_id: 50001, project_id: 10003, name: 'Space inner elements.', description: 'Site lacks padding and margin for inner elements.'},
        {id: 100007, user_id: 50002, project_id: 10003, name: 'Z index.', description: 'Site needs layers instead of borders.'},
        {id: 100008, user_id: 50003, project_id: 10003, name: 'Change header to vh instead of hardcoded px.', description: 'Currently header size doesnt adjust to the device.'},
        {id: 100009, user_id: 50001, project_id: 10001, name: 'Add styling framework.', description: 'Add bootstrap.'},
        {id: 100010, user_id: 50001, project_id: 10004, name: 'Reposition control buttons.', description: 'Rework add/edit/delete buttons inline/somewhere else.'},
        {id: 100011, user_id: 50003, project_id: 10004, name: 'Make a footer.', description: 'Create footer.'},
        {id: 100012, user_id: 50003, project_id: 10001, name: 'Implement authorization.', description: 'Add Oauth.'},
        {id: 100013, user_id: 50003, project_id: 10005, name: 'Pat yourself on the back!.', description: 'God Job so far!.'}
      ]);
    });
};
