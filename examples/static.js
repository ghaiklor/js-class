var Class = require('../');

var BasicClass = Class.create({}, {
    staticFoo: 'bar'
});

var ExtendedClass = BasicClass.extend({}, {
    staticBar: 'foo'
});

console.log(BasicClass.staticFoo); // bar
console.log(BasicClass.staticBar); // undefined

console.log(ExtendedClass.staticFoo); // undefined
console.log(ExtendedClass.staticBar); // foo
