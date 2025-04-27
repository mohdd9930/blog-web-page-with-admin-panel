import mongoose from 'mongoose';

const DBCon = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MONGODB IS CONNECTED");
  } catch (error) {
    console.error("MongoDB connection FAILED", error);
    process.exit(1);
  }
};

export default DBCon;
