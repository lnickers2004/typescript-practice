/**
 * Created by larrynickerson on 4/13/15.
 */

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

class Greeter {
    greeting:string;

    constructor(message:string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}

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

class Animal {
    name:string;

    constructor(theName:string) {
        this.name = theName;
    }

    move(meters:number = 0) {
        console.log(this.name + " moved " + meters + "m.");
    }
}

class Snake extends Animal {
    constructor(name:string) {
        super(name);
    }

    move(meters = 5) {
        console.log("Slithering...");
        super.move(meters);
    }
}

class Horse extends Animal {
    constructor(name:string) {
        super(name);
    }

    move(meters = 45) {
        console.log("Galloping...");
        super.move(meters);
    }
}

var sam = new Snake("Sammy the Python");
var tom:Animal = new Horse("Tommy the Palomino");
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

/*
* Private/Public modifiers
*
 Public by default

 You may have noticed in the above examples we haven't had to use the
 word 'public' to make any of the members of the class visible.
 Languages like C# require that each member be explicitly labelled
 'public' to be visible. In TypeScript, each member is public by default.

 You may still mark members a private, so you control what is
 publicly visible outside of your class. We could have written
 the 'Animal' class from the previous section like so:
* */

class Animal2 {
    private _name:string;

    constructor(theName:string) {
        this._name = theName;
    }

    move(meters:number) {
        console.log(this._name + " moved " + meters + "m.");
    }
}

var myAnimal: Animal2;

var myOtherAnimal: Animal2 = new Animal2("jones");

myAnimal = new Animal2("cat");
myAnimal.move(parseInt("5"));

myOtherAnimal.move(4);







