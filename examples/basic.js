var Class = require('../');

var BasicClass = Class.create(); // BasicClass -> Object
var ExtendedClass = BasicClass.extend(); // ExtendedClass -> BasicClass -> Object
var MoreExtendedClass = ExtendedClass.extend(); // MoreExtendedClass -> ExtendedClass -> BasicClass -> Object
