// Union Types
// TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators.
// Now that we know how to write a few types, it’s time to start combining them in interesting ways.

let score :number | string = 33
score= "33"

type User ={
    name:string
    id:number
} 
type Admin ={
    userName:string
    id:string
}


let nihal :User | Admin = {name:"Name",id:1}
 nihal = {userName:"Name", id:"2"}

 //there is a problem in this part of the code whenever we try to manipulate the code
 function getDbId(id:number | string){
    //Making Some Api calls
    console.log(`APi URL ${id}`)

//    Property 'toLowerCase' does not exist on type 'string | number'.
//   Property 'toLowerCase' does not exist on type 'number'
    // id.toLowerCase()
 }
 getDbId(1)
 getDbId("2")

 //Correct implementation

 function getDB(id:number |string){
    if(typeof id === "string"){
        id.toLowerCase()
    }

 }


 //Array

 const a :number[] =[1,2,3]
 const a2 :string[] =["1","2","3","4"]
//const a2 :string[] | number[] =["1","2","3","4"] // wrong Implementation
const a3 :(string | number)[] = [1,2,"3","4"] // correct

//another Strict Types can be 
let seat : "upper"| "lower"| "middle"
seat = "upper"
// seat = "up" / not supported
