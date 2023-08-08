//Types in TS
let greeting: String = "Hello Nihal";

let myNum = 6;
greeting.toLowerCase();
console.log(greeting);

//number not numbers
let userId: number = 12344;
userId.toFixed;
// userId = "String" //This is a type Error
//boolean
let loggedIn: boolean = false;

//any
//TypeScript also has a special type, any, 
//that you can use whenever you don’t want a particular value to cause typechecking errors.

// noImplicitAny
// When you don’t specify a type,
//  and TypeScript can’t infer it from context, the compiler will typically default to any.
//  You usually want to avoid this, though,
//  because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.
let hero;
function getHero() {
  return "thor";
}
hero = getHero(); // type any
export {};
