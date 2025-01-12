import Connection from "./connection";
import { test1 } from "./test";

const myConnection = Connection.getMyConnectionInstance('mongodb://localhost:27017',"1");
myConnection.getMyConnectionInfo();
test1();