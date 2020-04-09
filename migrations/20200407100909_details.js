
exports.up = function(knex) {
    return knex.schema.createTable('details', table => {
        table.increments('id').primary()
        table.string('priority')
        table.integer('issue_id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('details')
};
