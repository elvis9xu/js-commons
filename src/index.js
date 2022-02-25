import objectUtil from './object/objectUtil';
import arrayUtil from './array/arrayUtil';
import arrayEnhancer from './array/arrayEnhancer';

const allEnhancer = {
    enhance: function() {
        arrayEnhancer.enhance();
    }
}

const api = {
    allEnhancer,
    objectUtil,
    arrayUtil,
    arrayEnhancer,
}

module.exports = api;
module.exports.default = api;