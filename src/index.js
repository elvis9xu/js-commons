import Logger from './log/Logger';
import objectUtil from './object/objectUtil';
import arrayUtil from './array/arrayUtil';
import arrayEnhancer from './array/arrayEnhancer';
import dateUtil from './date/dateUtil';
import dateEnhancer from './date/dateEnhancer';
import stringUtil from './string/stringUtil';
import stringEnhancer from './string/stringEnhancer';

const allEnhancer = {
    enhance: function() {
        arrayEnhancer.enhance();
        dateEnhancer.enhance();
    }
}

const api = {
    Logger,
    objectUtil,
    allEnhancer,
    arrayUtil,
    arrayEnhancer,
    dateUtil,
    dateEnhancer,
    stringUtil,
    stringEnhancer,
}

module.exports = api;
module.exports.default = api;