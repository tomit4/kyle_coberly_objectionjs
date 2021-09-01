const { Model } = require("objection");
const config = require("../db/knex");
Model.knex(config);

module.exports = class Dog extends Model {
  static get tableName() {
    return "dog";
  }
};
