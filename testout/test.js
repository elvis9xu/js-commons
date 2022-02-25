'use strict';

var _index = require('../lib/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.allEnhancer.enhance();

console.log('enhance ok!');

console.log("====test log====");
_index2.default.Logger.setLevel(_index2.default.Logger.INFO);
var log = _index2.default.Logger.getLogger('test.js');
log.debug("I am debug log");
log.info("I am info log");
log.warn("I am warn log");
log.error("I am error log");

console.log("====test object====");
console.log(_index2.default.objectUtil.isUndefined(undefined));
console.log(_index2.default.objectUtil.isUndefined(null));
console.log(_index2.default.objectUtil.isNull(undefined));
console.log(_index2.default.objectUtil.isNull(null));
console.log(_index2.default.objectUtil.isNone(undefined));
console.log(_index2.default.objectUtil.isNone(null));
console.log(_index2.default.objectUtil.isNone(NaN));

console.log("====test array====");
console.log("----test getItem----");
console.log([{ a: '1', b: '2' }, { a: '11', b: '2' }, { a: '11', b: '22' }].getFirstItemMatchProperties({ b: '2' }));
console.log([{ a: '1', b: '2' }, { a: '11', b: '2' }, { a: '11', b: '22' }].getItemsMatchProperties({ b: '2' }));

console.log("----test contains----");
console.log([1, 2, 3].contains(3));
console.log([{ a: '1', b: '2' }, { a: '11', b: '22' }].containsMatchProperties({ b: '2' }));

console.log("----test indexOf----");
console.log([1, 2, 3].indexOf(2));
console.log([{ a: '1', b: '2' }, { a: '11', b: '22' }].indexOfMatchProperties({ a: '11' }));

console.log("----test remove----");
console.log([1, 2, 3].removeIndexAt(1));
console.log([1, 2, 3].remove(2));
console.log([{ a: '1', b: '2' }, { a: '11', b: '22' }].removeMatchProperties({ a: '11' }));

console.log("====test date====");
console.log(new Date().format("yyyy-MM-dd HH:mm:ss.SSS"));

console.log("====test string====");
console.log(_index2.default.stringUtil.equalsIgnoreCase('abc', 'ABC'));
console.log(_index2.default.stringUtil.trimAndNoEmptyArray(['', 'abc', '  ', 'ABC', '  ']));