
exports.up = function(knex) {
    return knex.schema.createTable('projects', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('description')
        table.integer('user_id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('projects')
};
