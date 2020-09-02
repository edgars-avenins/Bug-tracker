
exports.up = function(knex) {
    return knex.schema.createTable('status', table => {
        table.integer('issue_id')
        table.boolean('assigned')
        table.integer('user_id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('status')
};
