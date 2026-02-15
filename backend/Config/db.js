import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);

        console.log("✅ MongoDB connected");

    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
        throw err; // important for startup control
    }
};

export default ConnectDB;
