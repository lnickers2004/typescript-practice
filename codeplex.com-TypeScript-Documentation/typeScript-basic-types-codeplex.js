/**
 * Created by larrynickerson on 4/13/15.
 */
var isDone = false;
var height = 6;
var name = "bob";
name = 'smith';
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = 1 /* Green */;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = 2 /* Green */;
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
var c3 = 2 /* Green */;
var Color4;
(function (Color4) {
    Color4[Color4["Red"] = 1] = "Red";
    Color4[Color4["Green"] = 2] = "Green";
    Color4[Color4["Blue"] = 3] = "Blue";
})(Color4 || (Color4 = {}));
var colorName = Color4[2];
console.log(colorName);
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
var list = [1, true, "free"];
list[1] = 100;
function warnUser() {
    console.log("This is my warning message");
}
warnUser();
//# sourceMappingURL=typeScript-basic-types-codeplex.js.map