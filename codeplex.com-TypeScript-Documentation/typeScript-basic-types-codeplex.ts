/**
 * Created by larrynickerson on 4/13/15.
 */
var isDone:boolean = false;

var height:number = 6;

var name:string = "bob";
name = 'smith';

var list1:number[] = [1, 2, 3];
var list2:Array<number> = [1, 2, 3];

enum Color {Red, Green, Blue}
var c:Color = Color.Green;

enum Color2 {Red = 1, Green, Blue}
var c2:Color2 = Color2.Green;

enum Color3 {Red = 1, Green = 2, Blue = 4}
var c3:Color3 = Color3.Green;

enum Color4 {Red = 1, Green, Blue}
var colorName:string = Color4[2];

console.log(colorName);


var notSure:any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

var list:any[] = [1, true, "free"];

list[1] = 100;

function warnUser():void {
    console.log("This is my warning message");
}

warnUser();


