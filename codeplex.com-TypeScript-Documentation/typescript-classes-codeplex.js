/**
 * Created by larrynickerson on 4/13/15.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*
* Introduction
*
 Traditional JavaScript focuses on functions and prototype-based
 inheritance as the basic means of building up reusable components,
 but this may feel a bit awkward to programmers more comfortable
 with an object-oriented approach, where classes inherit functionality
 and objects are built from these classes. Starting with ECMAScript 6,
 the next version of JavaScript, JavaScript programmers will be able
 to build their applications using this object-oriented class-based
 approach. In TypeScript, we allow developers to use these techniques
 now, and compile them down to JavaScript that works across all major
 browsers and platforms, without having to wait for the next version
 of JavaScript.
* */
/*
* Classes
 Let's take a look at a simple class-based example:
* */
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
})();
var greeter = new Greeter("world");
console.log(greeter.greet());
/*
* The syntax should look very familiar if you've used C# or Java before.
* We declare a new class 'Greeter'. This class has three members, a property
* called 'greeting', a constructor, and a method 'greet'.

 You'll notice that in the class when we refer to one of the members of the
 class we prepend 'this.'. This denotes that it's a member access.

 In the last line we construct an instance of the Greeter class using 'new'.
 This calls into the constructor we defined earlier, creating a new object
 with the Greeter shape, and running the constructor to initialize it.

* */
/*
* Inheritance
*
 In TypeScript, we can use common object-oriented patterns. Of course,
 one of the most fundamental patterns in class-based programming is being
 able to extend existing classes to create new ones using inheritance.

 Let's take a look at an example:
* */
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        console.log(this.name + " moved " + meters + "m.");
    };
    return Animal;
})();
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function (meters) {
        if (meters === void 0) { meters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, meters);
    };
    return Snake;
})(Animal);
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        _super.call(this, name);
    }
    Horse.prototype.move = function (meters) {
        if (meters === void 0) { meters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, meters);
    };
    return Horse;
})(Animal);
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
var sylvester = new Horse("Sylvester the Stallion");
sam.move();
tom.move(34);
sylvester.move();
/*
* This example covers quite a bit of the inheritance features
* in TypeScript that are common to other languages. Here we
* see using the 'extends' keywords to create a subclass. You
* can see this where 'Horse' and 'Snake' subclass the base class
* 'Animal' and gain access to its features.

 The example also shows off being able to override methods in the
 base class with methods that are specialized for the subclass.
 Here both 'Snake' and 'Horse' create a 'move' method that overrides
 the 'move' from 'Animal', giving it functionality specific to each class.
* */
//# sourceMappingURL=typescript-classes-codeplex.js.map