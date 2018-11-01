"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Application1_1 = require("../Application1");
describe("Application1", () => {
    describe("application1", () => {
        it("should return hello with name", () => {
            let app = new Application1_1.default();
            chai_1.expect(app).to.not.be.null;
        });
    });
});
