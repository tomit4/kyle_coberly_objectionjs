exports.up = function (knex, Promise) {
  return knex.schema.createTable("dog", (table) => {
    table.increments(); // this it, the standard id AUTO INCREMENT
    table.string("name");
  });
};

exports.down = function (knex, Promsie) {
  return knex.schema.dropTableIfExists("dog");
};
