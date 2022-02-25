'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var Logger = function () {
	function Logger(id) {
		_classCallCheck(this, Logger);

		this.id = id;
	}

	_createClass(Logger, [{
		key: 'isEnabled',
		value: function isEnabled(level) {
			Logger._checkLevel(level);
			return level <= Logger.getLevel();
		}
	}, {
		key: 'log',
		value: function log(level) {
			if (this.isEnabled(level)) {
				var _console;

				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}

				(_console = console).log.apply(_console, [this.id, Logger._getLevelString(level)].concat(args));
			}
		}
	}, {
		key: 'isTraceEnabled',
		value: function isTraceEnabled() {
			return this.isEnabled(Logger.TRACE);
		}
	}, {
		key: 'trace',
		value: function trace() {
			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			this.log.apply(this, [Logger.TRACE].concat(args));
		}
	}, {
		key: 'isDebugEnabled',
		value: function isDebugEnabled() {
			return this.isEnabled(Logger.DEBUG);
		}
	}, {
		key: 'debug',
		value: function debug() {
			for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				args[_key3] = arguments[_key3];
			}

			this.log.apply(this, [Logger.DEBUG].concat(args));
		}
	}, {
		key: 'isInfoEnabled',
		value: function isInfoEnabled() {
			return this.isEnabled(Logger.INFO);
		}
	}, {
		key: 'info',
		value: function info() {
			for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
				args[_key4] = arguments[_key4];
			}

			this.log.apply(this, [Logger.INFO].concat(args));
		}
	}, {
		key: 'isWarnEnabled',
		value: function isWarnEnabled() {
			return this.isEnabled(Logger.WARN);
		}
	}, {
		key: 'warn',
		value: function warn() {
			for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
				args[_key5] = arguments[_key5];
			}

			this.log.apply(this, [Logger.WARN].concat(args));
		}
	}, {
		key: 'isErrorEnabled',
		value: function isErrorEnabled() {
			return this.isEnabled(Logger.ERROR);
		}
	}, {
		key: 'error',
		value: function error() {
			for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
				args[_key6] = arguments[_key6];
			}

			this.log.apply(this, [Logger.ERROR].concat(args));
		}
	}]);

	return Logger;
}();

// 类成员: 大写为静态, _开头为私有, 其他为公有


Logger.ERROR = 1;
Logger.WARN = 2;
Logger.INFO = 3;
Logger.DEBUG = 4;
Logger.TRACE = 5;

Logger._level = Logger.INFO;
// Logger._level = Logger.DEBUG;

Logger.setLevel = function (level) {
	Logger._checkLevel(level);
	Logger._level = level;
};

Logger.getLevel = function () {
	return Logger._level;
};

Logger.getLogger = function (id) {
	return new Logger(id);
};

Logger._checkLevel = function (level) {
	if (level < 1 || level > 5) throw new Error("wrong log level: " + level);
};

Logger._getLevelString = function (level) {
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
};

module.exports = Logger;
module.exports.default = Logger;