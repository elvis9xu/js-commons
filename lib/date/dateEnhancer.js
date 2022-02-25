'use strict';

var _dateUtil = require('./dateUtil');

var _dateUtil2 = _interopRequireDefault(_dateUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function enhance() {
    Date.prototype.format = function (pattern) {
        return _dateUtil2.default.format(this, pattern);
    };
}

var api = {
    enhance: enhance
};
module.exports = api;
module.exports.default = api;