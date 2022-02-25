'use strict';

var _Logger = require('./log/Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _objectUtil = require('./object/objectUtil');

var _objectUtil2 = _interopRequireDefault(_objectUtil);

var _arrayUtil = require('./array/arrayUtil');

var _arrayUtil2 = _interopRequireDefault(_arrayUtil);

var _arrayEnhancer = require('./array/arrayEnhancer');

var _arrayEnhancer2 = _interopRequireDefault(_arrayEnhancer);

var _dateUtil = require('./date/dateUtil');

var _dateUtil2 = _interopRequireDefault(_dateUtil);

var _dateEnhancer = require('./date/dateEnhancer');

var _dateEnhancer2 = _interopRequireDefault(_dateEnhancer);

var _stringUtil = require('./string/stringUtil');

var _stringUtil2 = _interopRequireDefault(_stringUtil);

var _stringEnhancer = require('./string/stringEnhancer');

var _stringEnhancer2 = _interopRequireDefault(_stringEnhancer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allEnhancer = {
    enhance: function enhance() {
        _arrayEnhancer2.default.enhance();
        _dateEnhancer2.default.enhance();
    }
};

var api = {
    Logger: _Logger2.default,
    objectUtil: _objectUtil2.default,
    allEnhancer: allEnhancer,
    arrayUtil: _arrayUtil2.default,
    arrayEnhancer: _arrayEnhancer2.default,
    dateUtil: _dateUtil2.default,
    dateEnhancer: _dateEnhancer2.default,
    stringUtil: _stringUtil2.default,
    stringEnhancer: _stringEnhancer2.default
};

module.exports = api;
module.exports.default = api;