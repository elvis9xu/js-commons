'use strict';

var _objectUtil = require('./object/objectUtil');

var _objectUtil2 = _interopRequireDefault(_objectUtil);

var _arrayUtil = require('./array/arrayUtil');

var _arrayUtil2 = _interopRequireDefault(_arrayUtil);

var _arrayEnhancer = require('./array/arrayEnhancer');

var _arrayEnhancer2 = _interopRequireDefault(_arrayEnhancer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allEnhancer = {
    enhance: function enhance() {
        _arrayEnhancer2.default.enhance();
    }
};

var api = {
    allEnhancer: allEnhancer,
    objectUtil: _objectUtil2.default,
    arrayUtil: _arrayUtil2.default,
    arrayEnhancer: _arrayEnhancer2.default
};

module.exports = api;
module.exports.default = api;