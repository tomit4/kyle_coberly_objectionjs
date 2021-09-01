exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("dog")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("dog").insert([
        { name: "Bixby" },
        { name: "Mesa" },
        { name: "Harmony" },
      ]);
    });
};
