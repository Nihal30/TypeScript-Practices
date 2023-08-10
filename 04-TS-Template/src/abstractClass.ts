// An abstract method or abstract field is one that hasn’t had an implementation provided.
//  These members must exist inside an abstract class, which cannot be directly instantiated.

// The role of abstract classes is to serve as a base class for subclasses which do implement all the abstract members.
//  When a class doesn’t have any abstract members, it is said to be concrete.
 
abstract class Photo{
    constructor(
        public camera :string,
        public filter:string
    ){}
    // Function implementation is missing or not immediately following the declaration.
    // getPhotos():string

     abstract getPhotos():string
     getReelTime():number{
        //logic
        return 10
     }
}

// Cannot create an instance of an abstract class.
// const Result = new Photo("Photo","Filter")

class Instagram extends Photo{

    constructor(
        public camera :string,
        public filter:string,
        public instaFilter:string

    ){
        super(camera,filter)
    }
    getPhotos(): string {
        return "Photos"
        
    }

}
const Result = new Instagram("Photo","Filter","instaF ")

Result.getReelTime()