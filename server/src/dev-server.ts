import { MongoMemoryServer } from "mongodb-memory-server";

async function start() {
    console.log("Starting in-memory MongoDB server...");
    const mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    console.log(`\n==================================================`);
    console.log(`🍃 In-memory MongoDB started at:`);
    console.log(`   ${uri}`);
    console.log(`==================================================\n`);
    
    process.env.MONGO_URI = uri;
    
    // Dynamically require the main server file to ensure MONGO_URI is set first
    require("./server");
}

start().catch(err => {
    console.error("Failed to start dev-server with in-memory MongoDB:", err);
    process.exit(1);
});
