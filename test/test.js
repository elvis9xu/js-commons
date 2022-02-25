import index from '../lib/index';

index.allEnhancer.enhance();

console.log('enhance ok!');

console.log("====test log====")
index.Logger.setLevel(index.Logger.INFO);
const log = index.Logger.getLogger('test.js');
log.debug("I am debug log");
log.info("I am info log");
log.warn("I am warn log");
log.error("I am error log");

console.log("====test object====")
console.log(index.objectUtil.isUndefined(undefined));
console.log(index.objectUtil.isUndefined(null));
console.log(index.objectUtil.isNull(undefined));
console.log(index.objectUtil.isNull(null));
console.log(index.objectUtil.isNone(undefined));
console.log(index.objectUtil.isNone(null));
console.log(index.objectUtil.isNone(NaN));

console.log("====test array====")
console.log("----test getItem----")
console.log([{a:'1',b:'2'}, {a:'11', b:'2'}, {a:'11', b:'22'}].getFirstItemMatchProperties({b:'2'}));
console.log([{a:'1',b:'2'}, {a:'11', b:'2'}, {a:'11', b:'22'}].getItemsMatchProperties({b:'2'}));

console.log("----test contains----")
console.log([1,2,3].contains(3));
console.log([{a:'1',b:'2'}, {a:'11', b:'22'}].containsMatchProperties({b:'2'}));

console.log("----test indexOf----")
console.log([1,2,3].indexOf(2));
console.log([{a:'1',b:'2'}, {a:'11', b:'22'}].indexOfMatchProperties({a:'11'}));

console.log("----test remove----")
console.log([1,2,3].removeIndexAt(1));
console.log([1,2,3].remove(2));
console.log([{a:'1',b:'2'}, {a:'11', b:'22'}].removeMatchProperties({a:'11'}));

console.log("====test date====")
console.log(new Date().format("yyyy-MM-dd HH:mm:ss.SSS"));

console.log("====test string====")
console.log(index.stringUtil.equalsIgnoreCase('abc','ABC'));
console.log(index.stringUtil.trimAndNoEmptyArray(['', 'abc', '  ','ABC','  ']));