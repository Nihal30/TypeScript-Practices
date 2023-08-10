class userGetSet{
    readonly city:string ="korba"
    // private _UserId=1
    protected _UserId=1
    constructor(
        public name:string,
        public email:string
    ){

    }
    //private methode
    private deleteToken(){
        console.log("Token Deleted")
    }

    //getters
    get getEmail():string{
        return `email ${this.email}`
    }

    //Getters And Setters for Private Property
    get UserId(): number{
        return this._UserId

    }
//A 'set' accessor cannot have a return type annotation.
    set UserId(userId){
        if (userId <= 1) {
            throw new Error("UserID Should be more then 1")
            
        }
        this._UserId = userId
            
        

    }

}

//Inheritance

class subUser extends userGetSet{
    isFamily :boolean =true
    changeUserId(){
        this._UserId = 4

    }
}