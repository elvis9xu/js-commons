'use strict';

var _objectUtil = require('../object/objectUtil');

var _objectUtil2 = _interopRequireDefault(_objectUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 判断数组(array)是否为空
 *
 * @param {Array} array 源数组
 * @return {Boolean} 数组是否为空
 */
function isEmpty(array) {
    if (!array || !array.length) return true;
    return false;
}

/**
 * 从数组集合(array)中获取第一个与指定的属性和值(properties)相同的元素
 *
 * @param {Array} array 源数组
 * @param {Object} properties 属性映射对象
 * @return {Object} 匹配的数组元素
 */
function getFirstItemMatchProperties(array, properties) {
    if (isEmpty(array)) return null;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (_objectUtil2.default.isMatchProperties(item, properties)) return item;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return null;
}

/**
 * 从数组集合(array)中获取第一个与指定的属性和值(properties)相同的元素
 *
 * @param {Array} array 源数组
 * @param {Object} properties 属性映射对象
 * @return {Array} 匹配的数组元素集合
 */
function getItemsMatchProperties(array, properties) {
    var rs = [];
    if (isEmpty(array)) return rs;

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = array[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            if (_objectUtil2.default.isMatchProperties(item, properties)) {
                rs.push(item);
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return rs;
}

/**
 * 从数组集合(array)中获取第一个与指定的属性和值(properties)相同的元素的索引
 *
 * @param {Array} array 源数组
 * @param {Object} properties 属性映射对象
 * @return {Int} 匹配的数组元素的索引, 如果没有匹配到则返回-1
 */
function indexOfMatchProperties(array, properties) {
    if (isEmpty(array)) return -1;

    for (var index = 0; index < array.length; index++) {
        if (_objectUtil2.default.isMatchProperties(array[index], properties)) return index;
    }
    return -1;
}

/**
 * 判断数组集合(array)是否包含指定的对象(object)
 *
 * @param {Array} array 源数组
 * @param {Object} object 源对象
 * @return {Boolean} 是否包含
 */
function contains(array, object) {
    if (isEmpty(array)) return false;
    return array.indexOf(object) > -1;
}

/**
 * 判断数组集合(array)是否包含与指定的属性和值(properties)相同的元素
 *
 * @param {Array} array 源数组
 * @param {Object} properties 属性映射对象
 * @return {Int} 匹配的数组元素的索引, 如果没有匹配到则返回-1
 */
function containsMatchProperties(array, properties) {
    return indexOfMatchProperties(array, properties) > -1;
}

/**
 * 从数组集合(array)中删除对象(object)
 *
 * @param {Array} array 源数组
 * @param {Object} object 源对象
 * @return {Object} 被删除的象, 如果没有找到则返回null
 */
function remove(array, object) {
    if (isEmpty(array)) return null;

    var index = array.indexOf(object);
    if (index === -1) return null;

    return removeIndexAt(array, index);
}

/**
 * 从数组集合(array)中删除与指定的属性和值(properties)相同的元素
 *
 * @param {Array} array 源数组
 * @param {Object} properties 属性映射对象
 * @return {Object} 被删除的象, 如果没有找到则返回null
 */
function removeMatchProperties(array, properties) {
    var index = indexOfMatchProperties(array, properties);
    if (index === -1) return null;
    return removeIndexAt(array, index);
}

/**
 * 从数组集合(array)中删除索引为(index)的对象
 *
 * @param {Array} array 源数组
 * @param {Int} index 索引
 * @return {Object} 被删除的象, 如果没有找到则返回null
 */
function removeIndexAt(array, index) {
    if (isEmpty(array)) return null;
    if (array.length <= index) return null;
    return array.splice(index, 1)[0];
}

var api = {
    isEmpty: isEmpty,
    getFirstItemMatchProperties: getFirstItemMatchProperties,
    getItemsMatchProperties: getItemsMatchProperties,
    indexOfMatchProperties: indexOfMatchProperties,
    contains: contains,
    containsMatchProperties: containsMatchProperties,
    remove: remove,
    removeMatchProperties: removeMatchProperties,
    removeIndexAt: removeIndexAt
};

module.exports = api;
module.exports.default = api;