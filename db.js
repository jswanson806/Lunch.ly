/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql://jake:postgresql@/lunchly");

db.connect();

module.exports = db;
