import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectToDB from "./config/database.js";
const app = express();
import path from "path";
import { v4 as uuidv4 } from "uuid";
import methodOverride from "method-override";
import Chat from "./models/chat.js";

const __dirname = path.resolve();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.send("Surver is running, Welcome");
});

// route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  newChat
    .save()
    .then((res) => {
      console.log("chat saved");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);

  res.render("edit.ejs", { chat });
});

// edit or update
app.put("/chats/:id",async (req, res) => {
  let { id } = req.params;
  let {msg: newMsg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg },
    { runValidators: true, new: true }
  );
  console.log(updatedChat);
  res.redirect("/chats")
});

// delete route
app.delete("/chats/:id", async (req, res) => {
    let {id} = req.params
   let deletedChat = await Chat.findByIdAndDelete(id)
    console.log(deletedChat);
    res.redirect("/chats")
})

connectToDB();
export default app;
