"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test1 = test1;
const connection_1 = require("./connection");
function test1() {
    const myConnection1 = connection_1.default.getMyConnectionInstance("mongodb://localhost:2020", "2");
    myConnection1.getMyConnectionInfo();
}
