'use strict';

var _arrayUtil = require('./arrayUtil');

var _arrayUtil2 = _interopRequireDefault(_arrayUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function enhance() {
    Array.prototype.isEmpty = function () {
        return _arrayUtil2.default.isEmpty(this);
    };
    Array.prototype.getFirstItemMatchProperties = function (properties) {
        return _arrayUtil2.default.getFirstItemMatchProperties(this, properties);
    };
    Array.prototype.getItemsMatchProperties = function (properties) {
        return _arrayUtil2.default.getItemsMatchProperties(this, properties);
    };
    Array.prototype.indexOfMatchProperties = function (properties) {
        return _arrayUtil2.default.indexOfMatchProperties(this, properties);
    };
    Array.prototype.contains = function (object) {
        return _arrayUtil2.default.contains(this, object);
    };
    Array.prototype.containsMatchProperties = function (properties) {
        return _arrayUtil2.default.containsMatchProperties(this, properties);
    };
}

var api = {
    enhance: enhance
};
module.exports = api;
module.exports.default = api;