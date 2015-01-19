(function (root, factory) {
    "use strict";

    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Class = factory();
    }
}(this, function () {
    "use strict";

    /**
     * Extend object
     * @param {Object} target Target object
     * @param {Object} source Source object
     * @returns {Object}
     * @private
     */
    function _extend(target, source) {
        var keys = Object.keys(source);

        for (var i = 0; i < keys.length; i++) {
            target[keys[i]] = source[keys[i]];
        }

        return target;
    }

    function Class() {
    }

    /**
     * Create new Class or extend exists
     * @static
     * @param  {Object} [prototype]        Prototype object for new Class
     * @param  {Object} [staticProperties] Object with static properties for new Class
     * @param  {Array}  [mixins]           Array of mixins which need to inject in new Class prototype
     * @return {Object}                    Returns new Class
     *
     * @example
     * Class.create(prototype)
     * Class.create(prototype, staticProperties)
     * Class.create(prototype, staticProperties, [mixins])
     */
    Class.create = function (prototype, staticProperties, mixins) {
        prototype = _extend(this.prototype, prototype || {});
        staticProperties = staticProperties || {};
        mixins = mixins || [];

        var self = this;

        function Constructor() {
            return this.init && this.init.apply(this, arguments);
        }

        Constructor.prototype = Object.create(prototype);
        Constructor.prototype.constructor = Constructor;

        Object.defineProperties(Constructor, {
            extend: {
                value: Class.create,
                enumerable: false,
                writable: false,
                configurable: false
            },
            _super: {
                value: self,
                enumerable: false,
                writable: false,
                configurable: false
            }
        });

        _extend(Constructor, staticProperties);

        for (var i = mixins.length - 1; i >= 0; i--) {
            _extend(Constructor.prototype, mixins[i]);
        }

        return Constructor;
    };

    return Class;
}));
