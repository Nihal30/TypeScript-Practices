class User {
    public email:string
    name: string
    
    constructor(email:string,name:string){
        this.email=email
        this.name = name

    }
}

// Another Example
class userNew {
   
    private readonly city:string = "Korba"
    constructor( public email:string ,private name:string){

    }
}

const user = new User("name" ,"e@email.com")