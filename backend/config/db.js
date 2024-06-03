import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://sabuqatada:Nahipata_01@ecommerce.glnuxdl.mongodb.net/?retryWrites=true&w=majority&appName=ECommerce");
    console.log(`Successfully connnected to mongoDB 👍`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
