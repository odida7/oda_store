import mongoose from "mongoose";
//import { boolean } from "zod";

let isConnected : boolean = false;

export const connectToDB = async(): Promise<void> => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDb is already connected')
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URL || '', {
            dbName: 'Odda_Store'
        })
        isConnected = true;
        console.log('MongoDB is connected');
    } catch(err: any){
        console.log(err.message)
    }
}   