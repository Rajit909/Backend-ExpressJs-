import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectToDB from "./config/database.js";
const app = express();
import path from "path";
import { v4 as uuidv4 } from "uuid";
import methodOverride from "method-override";
import router from "./routes/listingRoute.js";

const __dirname = path.resolve();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));


// app.get("/listing", async (req, res) => {
//   let samplisting  = new Listing({
//     title: "My home",
//     desc: "By the prime",
//     price: 1200,
//     location: "Bareilly",
//     country: "india"

//   })
//   await samplisting.save();
//   console.log("listing saved");
//   res.send("Saved")
// })


connectToDB();

// routes
app.use("/", router);

export default app;
