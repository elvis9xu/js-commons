import dateUtil from './dateUtil';

function enhance() {
    Date.prototype.format = function(pattern) {return dateUtil.format(this, pattern);};
}

const api = {
    enhance
}
module.exports = api;
module.exports.default = api;