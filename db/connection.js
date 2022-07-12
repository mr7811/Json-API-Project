import mongoose from "mongoose";


const MONGODB_URI = process.env.DB_URL ||  "mongodb://127.0.0.1:27017/book";



mongoose.set("returnOriginal", false);

mongoose.connect(MONGODB_URI).catch((err) => {
console.log(`error mongodb : ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
    console.log("disconnect from Mongdodb")
})

mongoose.connection.on("error", (err) => {
console.log(`MOndgodb connection error: ${err}`);
});

export default mongoose.connection;
