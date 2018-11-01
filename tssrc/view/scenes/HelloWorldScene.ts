import HelloWorldMainLayer  from "./helloworld/HelloWorldLayer";
export default class HelloWorldScene extends cc.Scene {
    private _mainLayer: HelloWorldMainLayer;
    constructor  () {
        // 1. super init first
        super();
        super.ctor();
    }
    public onEnter () {
        super.onEnter();
        console.log("Hello World Scene");
        this._mainLayer = new HelloWorldMainLayer();
        this.addChild( this._mainLayer);
    }
}
