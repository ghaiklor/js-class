var Class = require('../');

var BasicClass = Class.create({
    type: "Basic",

    init: function () {
        this.foo = "bar";
    },

    getType: function () {
        return this.type;
    }
});

var ExtendedClass = BasicClass.extend({
    type: "ExtendedClass",

    init: function () {
        this.bar = "foo";
    }
});

var MoreClass = BasicClass.extend({
    type: "MoreClass"
});

var basic = new BasicClass();
console.log(basic.getType()); // Basic
console.log(basic.foo); // bar

var extended = new ExtendedClass();
console.log(extended.getType()); // ExtendedClass
console.log(extended.foo); // undefined
console.log(extended.bar); // foo

var more = new MoreClass();
console.log(more.getType()); // MoreClass
console.log(more.foo); // bar
console.log(more.bar); // undefined
