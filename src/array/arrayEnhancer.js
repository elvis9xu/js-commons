import arrayUtil from './arrayUtil';

function enhance() {
    Array.prototype.isEmpty = function() {return arrayUtil.isEmpty(this);};
    Array.prototype.getFirstItemMatchProperties = function(properties) {return arrayUtil.getFirstItemMatchProperties(this, properties);};
    Array.prototype.getItemsMatchProperties = function(properties) {return arrayUtil.getItemsMatchProperties(this, properties);};
    Array.prototype.indexOfMatchProperties = function(properties) {return arrayUtil.indexOfMatchProperties(this, properties);};
    Array.prototype.contains = function(object) {return arrayUtil.contains(this, object);};
    Array.prototype.containsMatchProperties = function(properties) {return arrayUtil.containsMatchProperties(this, properties);};
}

const api = {
    enhance
}
module.exports = api;
module.exports.default = api;