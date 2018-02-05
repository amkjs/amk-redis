
const db = require('./connection')()

class Redis {

	get(key) {
		return db.get(key);
	}

	/**
	* Set query with expire flags
	* @param {string} key - key for the redis entry
	* @param {string} value - value for the redis entry
	* @param {int} time - expire time in milisecondes if only 3 arguments
	* @param {string} ex - if ex == 's' then the expire time will be in secondes otherwise it will be defaulted as milisecondes
	* @returns {string} respond value from ioredis set function
	*/
	set(key, value, time, ex) {
		switch(arguments.length) {
			case 2: {
				return db.set(key, value);
			}
			case 3: {
				return db.set(key, value, 'px', time);
			}
			case 4: {
				if (ex === 's'){
					return db.set(key, value, 'ex', time);
				} else{
					return db.set(key, value, 'px', time);
				}
			}
			default: {
				break;
			}
		}
	}

	del(key) {
		return db.del(key);
	}

}

module.exports = Redis;
