
const db = require('./connection')()

class Redis {

	get(key) {
		return db.get(key);
	}

	set(key, value, time, ex) {
		switch(arguments.length) {
			case 2: {
				return db.set(key, value);
			}
			case 3: {
				return db.set(key, value, 'px', time);
			}
			case 4: {
				return db.set(key, value, 'ex', time);
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
