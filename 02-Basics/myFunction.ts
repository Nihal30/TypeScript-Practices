// Functions
// Functions are the primary means of passing data around in JavaScript.
//  TypeScript allows you to specify the types of both the input and output values of functions.
 

function addTwo(num){
    return num+2 
    
}
addTwo(5) //Type Any which is an erron of TS
// addTwo("5") //Type Any which is an erron of TS

//Correct implementation
function addnum(num:number){
    // return num + 2 // correct o/p
    return "string" //Wrong o/p but Ts is Not giving any Error
}

function add(num:number):number{
    return num +2 ;
    // return "string" //  This is giving error this time because we declare  a type chalking to the return
}

function getUpper(value:string){
    return value.toUpperCase()
}


function signUp(name:string,email:string,isPaid:boolean){

}

let logIn =(name:string,email:string,isPaid:boolean=false)=>{}


// this is also a problem in ts

// function getValue(myval:number):string{
//     if(myval=5){
//         return true
//     }
//     return "string"
// }


// TS is Smart enough to check for types without declaring it

// const heros = ["Thor","spiderman","ironman"] 
const heros =[1,2,3]
heros.map((hero):string=>{
    return `hero is${hero}`
})

//Always write the return types for functions
function consoleError(error:string):void{
    console.log(error)
}


// Some functions never return a value:
// The never type represents values which are never observed.
//  In a return type, this means that the function throws an exception or terminates execution of the program.
// never also appears when TypeScript determines there’s nothing left in a union.

function handleError(errorMsg:string):never{
    throw new Error(errorMsg);
    
}


addnum(1)
getUpper("string")
signUp("name","email",true)
 logIn("Nihal","Nihal@mail.com")

export{}