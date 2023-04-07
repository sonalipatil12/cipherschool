const mongoose = require("mongoose")

const url = "mongodb://sonalipatilfeb6:spatil@ac-rcfknss-shard-00-00.hlrocjz.mongodb.net:27017,ac-rcfknss-shard-00-01.hlrocjz.mongodb.net:27017,ac-rcfknss-shard-00-02.hlrocjz.mongodb.net:27017/?ssl=true&replicaSet=atlas-xqfx32-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.set('strictQuery', true);
mongoose.connect(url)

const conn = mongoose.connection;

conn.on("connected", () => {
    console.log("connected to db")
})

conn.on("disconnected", () => {
    console.log("disconnected from db")
})

conn.on("error", (error) => {
    console.log("could not connected to db", error)
})