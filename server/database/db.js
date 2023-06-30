
import mongoose from "mongoose";

const DBConnection = async () => {
    const MONGODB_URL = `mongodb://shahab:siddiqui123@ac-qkpdded-shard-00-00.alwz1ue.mongodb.net:27017,ac-qkpdded-shard-00-01.alwz1ue.mongodb.net:27017,ac-qkpdded-shard-00-02.alwz1ue.mongodb.net:27017/?ssl=true&replicaSet=atlas-2xuj8p-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
        console.log('Database Connected Successfully')
    } catch (error) {
        console.error('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;