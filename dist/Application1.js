"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HelloWorldScene_1 = require("./view/scenes/HelloWorldScene");
class Application1 {
    startUp() {
        cc.director.runScene(new HelloWorldScene_1.default());
    }
}
exports.default = Application1;
