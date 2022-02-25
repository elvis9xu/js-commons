'use strict';

var _stringUtil = require('./stringUtil');

var _stringUtil2 = _interopRequireDefault(_stringUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function enhance() {
    String.prototype.equalsIgnoreCase = function (s) {
        return _stringUtil2.default.equalsIgnoreCase(this, s);
    };
}

var api = {
    enhance: enhance
};
module.exports = api;
module.exports.default = api;