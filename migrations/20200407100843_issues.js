
exports.up = function(knex) {
    return knex.schema.createTable('issues', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('description')
        table.integer('user_id')
        table.integer('project_id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('issues')
};
