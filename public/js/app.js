"use strict";
function showType(args) {
    console.log(args);
}
showType({ id: 1, left: "test", right: "test" });
function showType1(arg) {
    console.log(arg);
}
showType1("test");
// Output: test
showType1(7);
// Output: 7
////////////////////////////////////////////////////
function showType2(args) {
    console.log(args);
}
showType2("test");
// Output: "test"
showType2(1);
function showType3(args) {
    console.log(args);
}
showType3({ id: 1, name: "test" });
// Output: {id: 1, name: "test"}
function showTypeTwo(args) {
    console.log(args);
}
showTypeTwo({ id: 1, name: 4 });
function showType4(args) {
    console.log(args);
}
showType4({ id: 1, name: "test" });
// Output: {id: 1, name: "test"}
function showTypeTwo2(args) {
    console.log(args);
}
showTypeTwo2({ id: "001", name: ["This", "is", "a", "Test"] });
function showType5(args) {
    console.log(args);
}
showType5({ id: 1 });
// Output: {id: 1}
showType5({ firstName: "John", lastName: "Doe" });
function showType6(args) {
    console.log(args);
}
showType6({ id: 1, firstName: "John", lastName: "Doe" });
function showType7(args) {
    // args.id = 4
    console.log(args);
}
showType7({ id: 1, name: "Doe" });
function showType8(args) {
    console.log(args);
}
showType8({ firstName: "John", lastName: "Doe" });
function showType9(args) {
    console.log(args);
}
showType9({ id: 7 });
var employees = {
    0: { id: 1, fullname: "John Doe", role: "Designer" },
    1: { id: 2, fullname: "Ibrahima Fall", role: "Developer" },
    2: { id: 3, fullname: "Sara Duckson", role: "Developer" },
};
function showType10(args) {
    console.log(args);
}
showType10("test");
// Output: "test"
showType10(1);
function showType11(arg) {
    console.log(arg);
}
//showType11({ id: 1, name: "Test" })
// Error: Type 'number' is not assignable to type 'string'.
showType11({ id: "testId", name: "This is a Test" });
// Output: {id: "testId", name: "This is a Test"}
///////////////////////////////////////////////////////////
function showType12(x) {
    if (typeof x === "number") {
        return "The result is " + (x + x);
    }
    throw new Error("This operation can't be done on a " + typeof x);
}
showType12("I'm not a number");
// Error: This operation can't be done on a string
showType12(7);
// Output: The result is 14
///////////////////////////////////////////////////
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.bar = function () {
        return "Hello World";
    };
    return Foo;
}());
var Bar = /** @class */ (function () {
    function Bar() {
        this.baz = "123";
    }
    return Bar;
}());
function showType13(arg) {
    if (arg instanceof Foo) {
        console.log(arg.bar());
        return arg.bar();
    }
    throw new Error("The type is not supported");
}
showType13(new Foo());
// Output: Hello World
showType13(new Bar());
function showType14(arg) {
    if ("x" in arg) {
        console.log("The property " + arg.x + " exists");
        return "The property " + arg.x + " exists";
    }
    throw new Error("This type is not expected");
}
//showType14({ x: 7 })
// Output: The property 7 exists
//showType14({ y: "ccc" })
// Error: This type is not expected
////////////////////////////////////////////////////
