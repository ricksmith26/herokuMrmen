const initOptions = { promiseLib: Promise };
const pgp = require("pg-promise")(initOptions);
const dbConfig = require("../config/dbConfig");
const DB = pgp(dbConfig);

module.exports = DB;
