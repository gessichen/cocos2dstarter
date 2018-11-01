import { IApplication } from "./IApplication";
import HelloWorldScene from "./view/scenes/HelloWorldScene";

export default class Application1 implements IApplication {

    private _config: {
        isdebug: boolean
    };

    public startUp() {
        cc.director.runScene(new HelloWorldScene());
    }
}
