// Tuple Types
// A tuple type is another sort of Array type that knows exactly how many elements it contains,
// and exactly which types it contains at specific positions.

//This is a normal array declaration
// const User : (string |number )[] = [1 ,"2"]

// Tuple Types
let  TUser : [string,number,boolean]
TUser= ["hc",131,true]

type user = [number , string]
const newUser = [1,"23"]
newUser[1]= "string"

// Argument of type 'boolean' is not assignable to parameter of type 'string | number'
// newUser.push(true);