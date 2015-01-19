# JSKlass

[![Build Status](https://travis-ci.org/ghaiklor/jsklass.svg?branch=master)](https://travis-ci.org/ghaiklor/jsklass)

*Create classes with prototype object, static properties and mixins in JavaScript.*

## How to get it?

### Install from npm

```shell
npm install jsklass
```

### Install from bower

```shell
bower install jsklass
```

## How to use it?

### Use in NodeJS

Include ```jsklass``` module and you can start work with it.

```javascript
var Class = require('jsklass');

var Basic = Class.create();
var Extended = Basic.extend();
```

### Use in browser

JSKlass creates a global variable ```Class``` which you can use.

```javascript
var Basic = Class.create();
var Extended = Basic.extend();
```

## Getting started

For example, you can create Animal class and extend it with Cat class.

```javascript
var Animal = Class.create({
    init: function() {
        this.type = "Animal";
    },

    getType: function() {
        return this.type;
    }
});

var Cat = Animal.extend({
    init: function() {
        this.type = "Cat";
    }
});

var justAnimal = new Animal();
justAnimal.getType(); // Animal

var justCat = new Cat();
justCat.getType(); // Cat
```

## API

API has simple method. When you create Class you call `create` method of Class object.

If you want extends then call `extend` in existing class.

```javascript
var result = Class.create(prototype, staticProperties, [mixinsArray]);
result.extend(prototype, staticProperties, [mixinsArray]);
```

## Examples

### Basic creating and extending

```javascript
var BasicClass = Class.create();
var ExtendedClass = BasicClass.extend();
var MoreExtendedClass = ExtendedClass.extend();
```

### Creating classes with methods and attributes and extend them

```javascript
var BasicClass = Class.create({
    type: "Basic",

    init: function() {
        this.foo = "bar";
    },

    getType: function() {
        return this.type;
    }
});

var ExtendedClass = BasicClass.extend({
    type: "ExtendedClass",

    init: function() {
        this.bar = "foo";
    }
});

var MoreClass = BasicClass.extend({
    type: "MoreClass"
});

var basic = new BasicClass();
basic.getType(); // Basic
basic.foo; // bar

var extended = new ExtendedClass();
extended.getType(); // ExtendedClass
extended.foo; // bar
extended.bar; // foo

var more = new MoreClass();
more.getType(); // MoreClass
more.foo; // bar
more.bar; // undefined
```

### Creating classes with prototype and static methods

```javascript
var BasicClass = Class.create({}, {
    staticFoo: 'bar'
});

var ExtendedClass = BasicClass.extend({}, {
    staticBar: 'foo'
});

BasicClass.staticFoo; // bar
BasicClass.staticBar; // undefined

ExtendedClass.staticFoo; // bar
ExtendedClass.staticBar; // foo
```

### Creating classes with prototype, static and mixins

```javascript
var EventEmitterMixin = {
    on: function() {
        return "on";
    },

    off: function() {
        return "off";
    },

    emit: function() {
        return "emit";
    }
};

var OtherMixin = {
    other: function() {
        return "Other";
    }
}

var EventEmitter = Class.create({}, {}, [EventEmitterMixin]);
var EventEmitterAndOther = Class.create({}, {}, [EventEmitterMixin, OtherMixin]);

var event = new EventEmitter();
event.on(); // on
event.off(); // off
event.emit(); // emit
event.other(); // undefined

var otherEvent = new EventEmitterAndOther();
event.on(); // on
event.off(); // off
event.emit(); // emit
event.other(); // Other
```
