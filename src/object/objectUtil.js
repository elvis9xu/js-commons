// 对象工具方法

/**
 * 判断对象object是否含有相应的属性和值properties
 *
 * @param {Object} object 源对象
 * @param {Object} properties 属性映射对象
 * @return {Boolean} 是否匹配
 */
function isMatchProperties(object, properties) {
    if (!object) return false;
    if (!properties) return true;

    for (const key in properties) {
        if (properties[key] !== object[key]) return false;
    }
    return true;
}


const api = {
    isMatchProperties
}

module.exports = api;
module.exports.default = api;