// import mongoose from "mongoose";

// const connectMongoDB = () => {
//     try {
//         mongoose.connect(process.env.MONGODB_URI);
//         console.log("Connected");
//     } catch (error) {
//         console.log(error);
//     }
// }

// export default connectMongoDB;


import mongoose from "mongoose";

const connectMongoDB = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error", error);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default connectMongoDB;
