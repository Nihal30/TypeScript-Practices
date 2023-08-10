interface TakePhoto{
    cameraMode:string
    filter:string
    burst:number
}
interface story{
    createStory():number
}

class Insta implements TakePhoto{
    constructor(
        public cameraMode:string,
        public burst:number ,
        public filter:string

    ){}
}

class youTybe implements TakePhoto,story{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number,
        public shorts:string
    ){}
    createStory(): number {
        return 1
    }

}