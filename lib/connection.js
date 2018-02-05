const Redis = require('ioredis');

let db;
module.exports = function () {
	if (db) {
		return db;
	} else {
		db = new Redis(process.env.REDIS_PORT, process.env.REDIS_HOST);
		return db;
	}
}
