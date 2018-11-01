import { expect } from "chai";
import Application1 from "../Application1";

describe("Application1", () => {

    describe("application1", () => {
        it("should return hello with name", () => {
            let app = new Application1();

            expect(app).to.not.be.null;
        });
    });
});
