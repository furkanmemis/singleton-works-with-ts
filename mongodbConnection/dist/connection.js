"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class Connection {
    constructor(url, id) {
        this.url = url;
        this.id = id;
    }
    static getMyConnectionInstance(url, id) {
        if (!this.instance) {
            this.instance = new Connection(url, id);
        }
        return this.instance;
    }
    connectToDb() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield mongoose_1.default.connect(this.url);
                console.log("Connected to MongoDB " + this.url);
            }
            catch (error) {
                console.error("Failed to connect to MongoDB:", error);
                throw error;
            }
        });
    }
    getMyConnectionInfo() {
        console.log("My connection info\n" + this.id + "\n" + this.url);
    }
}
Connection.instance = null;
exports.default = Connection;
