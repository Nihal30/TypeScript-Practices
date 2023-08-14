"use strict";
//In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics,
//  that is,being able to create a component that can work over a variety of types rather than a single one.
//  This allows users to consume these components and use their own types.
const score = [];
const names = [];
function idOne(val) {
    return val;
}
// While using any is certainly generic in that it will cause the function to accept any and all types for
//  the type of arg, we actually are losing the information about what that type was when the function returns.
//  If we passed in a number, the only information we have is that any type could be returned.
function idTwo(val) {
    return val;
}
// We’ve now added a type variable Type to the identity function. This Type allows us to capture the type the user provides 
// (e.g. number), so that we can use that information later. Here, we use Type again as the return type.
//  On inspection, we can now see the same type is used for the argument and the return type.
//  This allows us to traffic that type information in one side of the function and out the other.
function idThree(val) {
    return val;
}
idThree(true);
function idFour(val) {
    return val;
}
idFour({ brand: "TypeScript", type: 1 });
