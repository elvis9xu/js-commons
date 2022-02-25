/**
 * Logger
 * 使用方法
 * Logger.setLevel(Logger.INFO)
 * 
 * const _logger = Logger.getLogger('userApi');
 * 
 * _logger.info('HELLO WORLD');
 */

// 实例成员: 大写为静态, _开头为私有, 其他为公有
class Logger {
	constructor(id) {
	    this.id = id;
	}
	
	isEnabled(level) {
		Logger._checkLevel(level);
		return level <= Logger.getLevel();
	}
	
	log(level, ...args) {
		if (this.isEnabled(level)) {
			console.log(this.id, Logger._getLevelString(level), ...args);
		}
	}
	
	isTraceEnabled() {
		return this.isEnabled(Logger.TRACE);
	}
	
	trace(...args) {
		this.log(Logger.TRACE, ...args);
	}
	
	isDebugEnabled() {
		return this.isEnabled(Logger.DEBUG);
	}
	
	debug(...args) {
		this.log(Logger.DEBUG, ...args);
	}
	
	isInfoEnabled() {
		return this.isEnabled(Logger.INFO);
	}
	
	info(...args) {
		this.log(Logger.INFO, ...args);
	}
	
	isWarnEnabled() {
		return this.isEnabled(Logger.WARN);
	}
	
	warn(...args) {
		this.log(Logger.WARN, ...args);
	}
	
	isErrorEnabled() {
		return this.isEnabled(Logger.ERROR);
	}
	
	error(...args) {
		this.log(Logger.ERROR, ...args);
	}
}

// 类成员: 大写为静态, _开头为私有, 其他为公有
Logger.ERROR = 1;
Logger.WARN = 2;
Logger.INFO = 3;
Logger.DEBUG = 4;
Logger.TRACE = 5;

Logger._level = Logger.INFO;
// Logger._level = Logger.DEBUG;

Logger.setLevel = function(level) {
	Logger._checkLevel(level);
	Logger._level = level;
}

Logger.getLevel = function() {
	return Logger._level;
}

Logger.getLogger = function(id) {
	return new Logger(id);
}

Logger._checkLevel = function(level) {
	if (level < 1 || level > 5) throw new Error("wrong log level: " + level);
}

Logger._getLevelString = function(level) {
	if (Logger.ERROR == level) {
		return '[error]';
	} else if (Logger.WARN == level) {
		return '[warn ]';
	} else if (Logger.INFO == level) {
		return '[info ]';
	} else if (Logger.DEBUG == level) {
		return '[debug]';
	} else if (Logger.TRACE == level) {
		return '[trace]';
	}
	return null;
}

module.exports = Logger;
module.exports.default = Logger;