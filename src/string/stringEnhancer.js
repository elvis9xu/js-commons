import stringUtil from './stringUtil';

function enhance() {
    String.prototype.equalsIgnoreCase = function(s) {return stringUtil.equalsIgnoreCase(this, s);};
}

const api = {
    enhance
}
module.exports = api;
module.exports.default = api;