describe('Class', function () {
    it('Should create basic class', function () {
        var Test = Class.create();
        Test.extend.should.be.a.function;
        new Test().should.be.an.instanceof(Test);
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

        new Test().checkPrototype().should.be.equal('test');
        new Test().checkMixin().should.be.equal('test');
        Test.checkStatic().should.be.ok;
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
        new Foo().getTest().should.be.equal('test');
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

        new Foo().getTest().should.be.equal('test');
        new Foo().getFoo().should.be.equal('bar');
    });
});