import objectUtil from '../object/objectUtil';

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

    for (const item of array) {
        if (objectUtil.isMatchProperties(item, properties)) return item;
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
    let rs = [];
    if (isEmpty(array)) return rs;

    for (const item of array) {
        if (objectUtil.isMatchProperties(item, properties)) {
            rs.push(item);
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

    for (let index = 0; index < array.length; index++) {
        if (objectUtil.isMatchProperties(array[index], properties)) return index;
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


const api = {
    isEmpty,
    getFirstItemMatchProperties,
    getItemsMatchProperties,
    indexOfMatchProperties,
    contains,
    containsMatchProperties,
}

module.exports = api;
module.exports.default = api;