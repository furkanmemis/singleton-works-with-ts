"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
const test_1 = require("./test");
const myConnection = connection_1.default.getMyConnectionInstance('mongodb://localhost:27017', "1");
myConnection.getMyConnectionInfo();
(0, test_1.test1)();
