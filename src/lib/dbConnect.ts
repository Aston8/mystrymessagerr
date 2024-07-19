import mongoose from "mongoose";
//import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";


type ConnectionObject ={
    isConnected?: number//if returned ,type number
}


const connection: ConnectionObject={}


async function dbConnect(): Promise<void>{
    if (connection.isConnected){
        console.log("Already Connected to database");
        return
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '',{})

        connection.isConnected = db.connections[0].readyState

        console.log("DB connected successfully");

      } catch (error) {

        console.log("Database connection failed", error);
        
        process.exit()
   
    }
}


export default dbConnect;
        