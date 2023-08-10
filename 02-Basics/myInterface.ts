// An interface declaration is another way to name an object type
interface User {
    readonly dbId: string,
    email: string,
    userId: number,
    googleId:string,
    //method
    startTrial :()=>string
    // startTrial():string
    getCoupon(copunName:string,value:number):number

}
//We can also add another property to interface also called re-opening of the interface
interface User{

    gitHubURl:string
}
//we can also perform inheritanc with interfaces
interface Admin extends User{
    
}

const n:User = {dbId:"22",email:"n@n.com",userId:222,googleId:"1",
startTrial:()=>{
    return "String"
},
getCoupon:(name:"Hero",off:20)=>{
    return 2
},
gitHubURl:"GitHub/url"


}
export{}