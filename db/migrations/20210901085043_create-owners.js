exports.up = function (knex, Promise) {
  return knex.schema.createTable("owner", (table) => {
    table.increments();
    table.string("name");
  });
};

exports.down = function (knex, Promsie) {
  return knex.schema.dropTableIfExists("owner");
};
