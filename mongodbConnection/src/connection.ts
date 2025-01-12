import mongoose from "mongoose";

class Connection {
    private static instance: Connection | null = null;
    private url: string;
    private id: string;
    

    private constructor(url: string, id: string) {
        this.url = url;
        this.id = id;
    }

    static getMyConnectionInstance(url: string, id: string) {
        if (!this.instance) {
            this.instance = new Connection(url,id);
        }
        return this.instance;
    }

    async connectToDb() {
        try {
            await mongoose.connect(this.url);
            console.log("Connected to MongoDB " + this.url);
        } catch (error) {
            console.error("Failed to connect to MongoDB:", error);
            throw error;
        }
    }

    public getMyConnectionInfo(){
        console.log("My connection info\n"+this.id+"\n"+this.url);
    }
}


export default Connection;