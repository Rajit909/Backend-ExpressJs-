import { log } from "console";
import express from "express";
import path from "path"

const __dirname = path.resolve();

const app = express();

const PORT = 8000;

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
})

app.get("/", (req, res) => {
    res.send("Surver is running, Welcome")
})

let posts = [
    {
        username: "rajit",
        content: "I love coding"
    },
    {
        username: "sonu",
        content: "I love reading"
    },
    {
        username: "vikash",
        content: "I love cooking"
    },
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts})
})

app.get("/posts/new", (req, res) => {
    res.render("new.ejs")
})

app.post("/posts", (req, res) => {
    let { username, content } = (req.body)
    posts.push({username, content})
    res.redirect("/posts")
    res.send("Post request")
})