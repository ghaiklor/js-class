var assert = require('assert'),
    Class = require('./../src');

describe('Class', function () {
    it('Should create basic class', function () {
        var Test = Class.create();

        assert.equal(typeof Test, 'function', 'Should be a function');
        assert(new Test() instanceof Test, 'Should be an instance of Test');
    });

    it('Should create class with prototype, static and mixins', function () {
        var Test = Class.create({
            init: function () {
                this.test = 'test';
            },

            checkPrototype: function () {
                return this.test;
            }
        }, {
            checkStatic: function () {
                return true;
            }
        }, [{
            checkMixin: function () {
                return this.test;
            }
        }]);

        assert.equal(new Test().checkPrototype(), 'test', 'Should properly create prototype');
        assert.equal(new Test().checkMixin(), 'test', 'Should properly mixin object to prototype');
        assert(Test.checkStatic(), 'Should property create static field');
    });

    it('Should properly extend from exists class', function () {
        var Test = Class.create({
            init: function () {
                this.test = 'test';
            },

            getTest: function () {
                return this.test;
            }
        });

        var Foo = Test.extend();

        assert.equal(new Foo().getTest(), 'test', 'Should properly call extended method');
    });

    it('Should properly call _super', function () {
        var Test = Class.create({
            init: function () {
                this.test = 'test';
            },

            getTest: function () {
                return this.test;
            }
        });

        var Foo = Test.extend({
            init: function () {
                this._super();
                this.foo = 'bar';
            },

            getFoo: function () {
                return this.foo;
            }
        });

        assert.equal(new Foo().getTest(), 'test', 'Should properly get value from super class');
        assert.equal(new Foo().getFoo(), 'bar', 'Should properly get value from sub class');
    });
});
