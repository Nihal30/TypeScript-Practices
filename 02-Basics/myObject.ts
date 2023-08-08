// In JavaScript, the fundamental way that we group and pass around data is through objects.
// In TypeScript, we represent those through object types.

const User = {
    name:"Nihal",
    Email:"Nihal@gmail.com",
    isActive:true
}
function createUser({name:string,isPaid:boolean}){ 

}

//we can not declare a function like this
// createUser()  

createUser({name:"Nihal",isPaid:false})

 //1 { } = return Type
 //2{}  = defination
function createCourse():{name:string,price:number} {
    return{name:"TypeScript",price: 10}
}

// Bad behaviour of objects in typescript
let newUser = {name:"Nihal",isPaid:false,email:"Nihal@gmail.com"}
createUser(newUser)


// Type Aliases in Typescript

// we’ve been using object types and union types by writing them directly in type annotations.
// This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.
// A type alias is exactly that - a name for any type. The syntax for a type alias is:

type User ={
    name:string;
    email:string;
    isActive:boolean
}

function createNewUser(user:User):User{
    return {name: " ",email:" ",isActive:true}

}
createNewUser({name: " ",email:" ",isActive:true})

// readonly Properties
// Properties can also be marked as readonly for TypeScript. While it won’t change any behavior at runtime, 
// a property marked as readonly can’t be written to during type-checking.
 // ? Symbol is used to make things Optiona

type UserInfo={
    readonly _id:string
    name:string
    email:string
    cardDetails ?: number

}

let myUser : UserInfo ={
    _id:"111" ,
    name:" N" ,
    email: "N@N.com "
}
myUser.email="N@N.com "

// Cannot assign to '_id' because it is a read-only property
// myUser._id= "12234"

//Combination of types

type cardNumber ={
    cardNumber:string
}
type cardDate = {
    cardDate: string
}
type cardAllDetails=cardNumber & cardDate&{
    cardCV :number
}
export{}