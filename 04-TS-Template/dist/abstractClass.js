"use strict";
// An abstract method or abstract field is one that hasn’t had an implementation provided.
//  These members must exist inside an abstract class, which cannot be directly instantiated.
// The role of abstract classes is to serve as a base class for subclasses which do implement all the abstract members.
//  When a class doesn’t have any abstract members, it is said to be concrete.
class Photo {
    constructor(camera, filter) {
        this.camera = camera;
        this.filter = filter;
    }
    getReelTime() {
        //logic
        return 10;
    }
}
// Cannot create an instance of an abstract class.
// const Result = new Photo("Photo","Filter")
class Instagram extends Photo {
    constructor(camera, filter, instaFilter) {
        super(camera, filter);
        this.camera = camera;
        this.filter = filter;
        this.instaFilter = instaFilter;
    }
    getPhotos() {
        return "Photos";
    }
}
const Result = new Instagram("Photo", "Filter", "instaF ");
Result.getReelTime();
