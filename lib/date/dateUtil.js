"use strict";

/**
 * 把日期(date)按格式(pattern)进行格式化
 *
 * @param {Date} date 日期对象
 * @param {String} pattern 格式
 * @return {String} 格式化后的字符串
 */
function format(date, pattern) {
    if (!date || !pattern) return "";

    var map = {
        "M+": date.getMonth() + 1, // 月
        "d+": date.getDate(), // 日
        "H+": date.getHours(), // 时(24小时制)
        "m+": date.getMinutes(), // 分
        "s+": date.getSeconds(), // 秒
        "S+": date.getMilliseconds() // 毫秒
    };

    // 年
    var match = /(y+)/.exec(pattern);
    if (match) {
        pattern = pattern.replace(match[1], (date.getFullYear() + "").substring(4 - match[1].length));
    }

    // 其他
    for (var key in map) {
        match = new RegExp("(" + key + ")").exec(pattern);
        if (!match) continue;

        if (match[1].length <= 1) {
            pattern = pattern.replace(match[1], map[key]);
        } else {
            var val = "00" + map[key];
            pattern = pattern.replace(match[1], val.substring(val.length - match[1].length));
        }
    }

    return pattern;
}

var api = {
    format: format
};

module.exports = api;
module.exports.default = api;