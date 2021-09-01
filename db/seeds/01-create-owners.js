exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("owner")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("owner").insert([{ name: "Kyle" }, { name: "Elyse" }]);
    });
};
