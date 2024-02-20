import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/task-manager";

const connectToMongoDB = async () => {
  try {
    mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
};

export default connectToMongoDB;