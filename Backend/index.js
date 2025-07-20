import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import messageRoute from "./route/msg.route.js";

const app = express();
dotenv.config();

// Middleware setup (must come before routes)
app.use(cors()); 
app.use(express.json()); 

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// MongoDB connection
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error: ", error);
}

// Routes (after middleware)
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/msg", messageRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});