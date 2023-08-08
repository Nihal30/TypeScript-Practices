"use strict";
// In JavaScript, the fundamental way that we group and pass around data is through objects.
// In TypeScript, we represent those through object types.
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Nihal",
    Email: "Nihal@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
//we can not declare a function like this
// createUser()  
createUser({ name: "Nihal", isPaid: false });
//1 { } = return Type
//2{}  = defination
function createCourse() {
    return { name: "TypeScript", price: 10 };
}
// Bad behaviour of objects in typescript
var newUser = { name: "Nihal", isPaid: false, email: "Nihal@gmail.com" };
createUser(newUser);
function createNewUser(user) {
    return { name: " ", email: " ", isActive: true };
}
createNewUser({ name: " ", email: " ", isActive: true });
