import {IApplication}  from "./IApplication";
import Application1  from "./Application1";

export const App: IApplication = new Application1();

export function start(): void {
    App.startUp();
}
