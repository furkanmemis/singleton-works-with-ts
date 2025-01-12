import Connection from "./connection";


export function test1() {
    const myConnection1 = Connection.getMyConnectionInstance("mongodb://localhost:2020", "2");

    myConnection1.getMyConnectionInfo();
}