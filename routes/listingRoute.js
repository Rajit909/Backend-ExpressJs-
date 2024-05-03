import express, { Router } from "express"
const app = express();

import Listing from "../models/listing.js";

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Welcome to the airbnb")
})

router.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    // console.log(allListings);
    res.render("index.ejs", {allListings});
  });


  export default router