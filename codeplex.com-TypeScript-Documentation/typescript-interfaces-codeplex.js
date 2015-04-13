/**
 * Created by larrynickerson on 4/13/15.
 */
/*
 * Our First Interface
 The easiest way to see how interfaces work is to start with a simple example:

 The type-checker checks the call to 'printLabel'. The 'printLabel' function
 has a single parameter that requires that the object passed in has a property
 called 'label' of type string. Notice that our object actually has more
 properties than this, but the compiler only checks to that at least the ones
 required are present and match the types required.
 * */
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabel2(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel2(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
function createSquare2(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.collor; // Type-checker can catch the mistyped name here
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare2({ color: "black" });
/*
* Once defined, we can use this function type interface like we would other
* interfaces. Here, we show how you can create a variable of a function type
* and assign it a function value of the same type.
* */
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
/*
* For function types to correctly type-check, the name of the parameters
* do not need to match. We could have, for example, written the above
* example like this:
* */
var mySearch2;
mySearch2 = function (src, sub) {
    var result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
var myArray;
myArray = ["Bob", "Fred"];
// Class Clock
var Clock = (function () {
    function Clock(h, m) {
    }
    return Clock;
})();
var Clock2 = (function () {
    function Clock2(h, m) {
    }
    Clock2.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    Clock2.prototype.setTimeAgain = function (d) {
        this.currentTime = d;
    };
    return Clock2;
})();
var Clock3 = (function () {
    function Clock3(h, m) {
    }
    return Clock3;
})();
var Clock4 = (function () {
    function Clock4(h, m) {
    }
    return Clock4;
})();
var cs = Clock4;
var newClock = new cs(7, 30);
var square = {};
square.color = "blue";
square.sideLength = 10;
var square1 = {};
square1.color = "blue";
square1.sideLength = 10;
square1.penWidth = 5.0;
var c;
c(10);
c.reset();
c.interval = 5.0;
/*
* When interacting with 3rd-party JavaScript, you may need to use
* patterns like the above to fully-describe the shape of the type.

 Last edited Nov 3, 2014 at 10:33 AM by jonturner, version 17
/**
 * Created by larrynickerson on 4/13/15.
 */
/*
 * Our First Interface
 The easiest way to see how interfaces work is to start with a simple example:

 The type-checker checks the call to 'printLabel'. The 'printLabel' function
 has a single parameter that requires that the object passed in has a property
 called 'label' of type string. Notice that our object actually has more
 properties than this, but the compiler only checks to that at least the ones
 required are present and match the types required.
 * */

function printLabel(labelledObj:{label: string}) {
    console.log(labelledObj.label);
}

var myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

/*We can write the same example again, this time using an interface to
describe the requirement of having the 'label' property that is a string:

 The interface 'LabelledValue' is a name we can now use to describe the
 requirement in the previous example. It still represents having a single
 property called 'label' that is of type string.
 Notice we didn't have to explicitly say that the object we pass to
 'printLabel' implements this interface like we might have to in other
 languages. Here, it's only the shape that matters. If the object
 we pass to the function meets the requirements listed, then it's allowed.

 It's worth pointing out that the type-checker does not require
 that these properties come in any sort of order, only that the
  properties the interface requires are present and have the required type.
 */

interface LabelledValue {
    label: string;
}

function printLabel2(labelledObj:LabelledValue) {
    console.log(labelledObj.label);
}

var myObj = {size: 10, label: "Size 10 Object"};
printLabel2(myObj);


/*
* INTERFACES CONTINUED:
*
* Optional Properties
 Not all properties of an interface may be required. Some exist under
 certain conditions or may not be there at all. These optional properties
  are popular when creating patterns like "option bags" where the user
  passes an object to a function that only has a couple properties filled in.

 Here's as example of this pattern:
* */
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config:SquareConfig):{color: string; area: number} {
    var newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

var mySquare = createSquare({color: "black"});

/*
* Interfaces with optional properties are written similar to other interfaces,
* which each optional property denoted with a '?' as part of the property
* declaration.

 The advantage of optional properties is that you can describe these possibly
 available properties while still also catching properties that you know
 are not expected to be available. For example, had we mistyped the name
 of the property we passed to 'createSquare', we would get an error message
 letting us know:
 * */

interface SquareConfig2 {
    color?: string;
    width?: number;
}

function createSquare2(config:SquareConfig2):{color: string; area: number} {
    var newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.collor;  // Type-checker can catch the mistyped name here
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

var mySquare = createSquare2({color: "black"});


/*
* Function Types
 Interfaces are capable of describing the wide range of shapes that JavaScript
 objects can take. In addition to describing an object with properties, interfaces
 are also capable of describing function types.

 To describe a function type with an interface, we give the interface a call
 signature. This is like a function declaration with only the parameter list
 and return type given.
* */
interface SearchFunc {
    (source:string, subString:string): boolean;
}

/*
* Once defined, we can use this function type interface like we would other
* interfaces. Here, we show how you can create a variable of a function type
* and assign it a function value of the same type.
* */
var mySearch: SearchFunc;
mySearch = function (source:string, subString:string) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};


/*
* For function types to correctly type-check, the name of the parameters
* do not need to match. We could have, for example, written the above
* example like this:
* */
var mySearch2:SearchFunc;
mySearch2 = function (src:string, sub:string) {
    var result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};

/*
* Function parameters are checked one at a time, with the type in each
* corresponding parameter position checked against each other. Here,
* also, the return type of our function expression is implied by the
* values it returns (here false and true). Had the function expression
* returned numbers or strings, the type-checker would have warned us
* that return type doesn't match the return type described in the
* SearchFunc interface.
* */

/*
* Array Types
 Similarly to how we can use interfaces to describe function types, we
 can also describe array types. Array types have an 'index' type that
 describes the types allowed to index the object, along with the
 corresponding return type for accessing the index.
* */
interface StringArray {
    [index: number]: string;
}

var myArray:StringArray;
myArray = ["Bob", "Fred"];

/*
*There are two types of supported index types: string and number.
* It is possible to support both types of index, with the restriction
* that the type returned from the numeric index must be a subtype of
* the type returned from the string index.
* */

/*
*While index signatures are a powerful way to describe the array and
* 'dictionary' pattern, they also enforce that all properties match
* their return type. In this example, the property does not match the
* more general index, and the type-checker gives an error:
* */
interface Dictionary {
    [index: string]: string;
    length: number;    // error, the type of 'length' is not a subtype of the indexer
}

/*
*Class Types
*
 Implementing an interface

 One of the most common uses of interfaces in languages like C# and Java,
 that of explicitly enforcing that a class meets a particular contract,
 is also possible in TypeScript.
* */
interface ClockInterface {
    currentTime: Date;
}
// Class Clock
class Clock implements ClockInterface {
    currentTime:Date;

    constructor(h:number, m:number) {
    }
}

/*
* You can also describe methods in an interface that are implemented
* in the class, as we do with 'setTime' in the below example
* */
interface ClockInterface2 {
    currentTime: Date;
    setTime(d:Date);
}

class Clock2 implements ClockInterface2 {
    currentTime:Date;

    setTime(d:Date) {
        this.currentTime = d;
    }

    setTimeAgain(d:Date) {
        this.currentTime = d;
    }
    constructor(h:number, m:number) {
    }
}
/*
* Interfaces describe the public side of the class, rather than both
* the public and private side. This prohibits you from using them to
* check that a class also has particular types for the private side
* of the class instance.
* */



/*
* Difference between static/instance side of class
 When working with classes and interfaces, it helps to keep in mind
 that a class has two types: the type of the static side and the type
 of the instance side. You may notice that if you create an interface
 with a construct signature and try to create a class that implements
 this interface you get an error:
* */
interface ClockInterface3 {
    new (hour:number, minute:number);
}

class Clock3 implements ClockInterface3 {
    currentTime:Date;

    constructor(h:number, m:number) {
    }
}


/*
* This is because when a class implements an interface, only the
* instance side of the class is checked. Since the constructor
* sits in the static side, it is not included in this check.
*
* Instead, you would need to work with the 'static' side of the
* class directly. In this example, we work with the class directly:
* */
interface ClockStatic4 {
    new (hour:number, minute:number);
}

class Clock4 {
    currentTime:Date;

    constructor(h:number, m:number) {
    }
}

var cs:ClockStatic4 = Clock4;
var newClock = new cs(7, 30);


/*
* Extending Interfaces
*
 Like classes, interfaces can extend each other. This handles the
 task of copying the members of one interface into another,
 allowing you more freedom in how you separate your interfaces
 into reusable components.
* */
interface Shape {
    color: string;
}

interface Square extends Shape{
    sideLength: number;
}

var square = <Square>{};
square.color = "blue";
square.sideLength = 10;

/*
* An interface can extend multiple interfaces, creating a combination
* of all of the interfaces.
* */
interface Shape1 {
    color: string;
}

interface PenStroke1 {
    penWidth: number;
}

interface Square1 extends Shape1, PenStroke1 {
    sideLength: number;
}

var square1 = <Square1>{};
square1.color = "blue";
square1.sideLength = 10;
square1.penWidth = 5.0;


/*
* Hybrid Types
 As we mentioned earlier, interfaces can describe the rich types
 present in real world JavaScript. Because of JavaScript's dynamic
 and flexible nature, you may occasionally encounter an object that
 works as a combination of some of the types described above.

 One such example is an object that acts as both a function and an
 object, with additional properties:
* */
interface Counter {
    (start:number): string;
    interval: number;
    reset(): void;
}

var c:Counter;
c(10);
c.reset();
c.interval = 5.0;

/*
* When interacting with 3rd-party JavaScript, you may need to use
* patterns like the above to fully-describe the shape of the type.

 Last edited Nov 3, 2014 at 10:33 AM by jonturner, version 17
 
//# sourceMappingURL=typescript-interfaces-codeplex.js.map