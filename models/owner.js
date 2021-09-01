const { Model } = require("objection");
const config = require("../db/knex");
Model.knex(config);

module.exports = class Owner extends Model {
  static get tableName() {
    return "owner";
  }
};
