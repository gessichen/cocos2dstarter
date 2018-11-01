"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HelloWorldLayer_1 = require("./helloworld/HelloWorldLayer");
class HelloWorldScene extends cc.Scene {
    constructor() {
        // 1. super init first
        super();
        super.ctor();
    }
    onEnter() {
        super.onEnter();
        console.log("Hello World Scene");
        this._mainLayer = new HelloWorldLayer_1.default();
        this.addChild(this._mainLayer);
    }
}
exports.default = HelloWorldScene;
