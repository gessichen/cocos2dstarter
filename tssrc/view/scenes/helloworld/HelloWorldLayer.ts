export default class HelloWorldMainLayer extends cc.Layer {
    public sprite: cc.Sprite;
    constructor  () {
        //////////////////////////////
        // 1. super init first
        super();
        super.ctor(); // call the cocos super method in JS  this would be this._super()

        console.log("Hello World Layer");
        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        let size = cc.winSize;

        console.log(size);

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        let helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);
    }
}
