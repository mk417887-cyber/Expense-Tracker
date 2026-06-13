const mongoose = require("mongoose");   

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (error) {
        console.log(error);
        console.log("MongoDB Connection Failed");
        process.exit(1);
    }
}

module.exports = connectDB