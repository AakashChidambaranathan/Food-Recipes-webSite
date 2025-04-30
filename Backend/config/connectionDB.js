// require mongoose
const mongoose = require("mongoose");

// connectDB function
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Connected....");
    } catch (err) {
        console.error("Database connection failed", err);
        process.exit(1);
    }
};

// export the function
module.exports = connectDB;
