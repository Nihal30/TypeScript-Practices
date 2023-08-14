function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("please provide ID");
    return;
  }
  id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

interface User {
  name: string;
  email: string;
}
interface Admin {
  name: string;
  email: string;
  isAdmin: string;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

//   instanceof narrowing

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

//Using type predicates

type Fish ={swim:()=>void}
type Bird ={fly:()=>void}

function isFish(pet:Fish|Bird):pet is Fish{
   return (pet as Fish).swim !==undefined
}
function getFood(pet:Fish |Bird){
    if(isFish(pet)){
        pet
        return "Fish Food"
    }else{
        pet
        return "Bird Food"
    }
}

//Discriminated unions

interface Circle{
    kind:"circle"
    radius:number
}
interface Square{
    kind:"square",
    side:number
}

interface Ractangle{
    kind :"rectangle",
    length:number,
    width:number
}

type Shape = Circle | Square

function getShape(shape:Shape){
    if(shape.kind ==="circle"){
        return Math.PI *shape.radius ** 2
    }
    return shape.side * shape.side
}


//The never type

function getArea(shape:Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI *shape.radius ** 2
        case "square":
            return shape.side * shape.side
        default:
            const anyShape:never = shape
            return anyShape
    }

}