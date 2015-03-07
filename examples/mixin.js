var Class = require('../');

var EventEmitterMixin = {
    on: function () {
        return "on";
    },

    off: function () {
        return "off";
    },

    emit: function () {
        return "emit";
    }
};

var OtherMixin = {
    other: function () {
        return "Other";
    }
};

var EventEmitter = Class.create({}, {}, [EventEmitterMixin]);
var EventEmitterAndOther = Class.create({}, {}, [EventEmitterMixin, OtherMixin]);

var event = new EventEmitter();
console.log(event.on()); // on
console.log(event.off()); // off
console.log(event.emit()); // emit
console.log(event.other); // undefined

var otherEvent = new EventEmitterAndOther();
console.log(otherEvent.on()); // on
console.log(otherEvent.off()); // off
console.log(otherEvent.emit()); // emit
console.log(otherEvent.other()); // Other
