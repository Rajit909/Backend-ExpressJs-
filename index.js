import { log } from "console";
import express from "express";
import path from "path"

const __dirname = path.resolve();

import browserSync from "browser-sync";

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

// Start Browsersync
const bs = browserSync.create();
bs.init({
    proxy: 'http://localhost:8000', // Your app's URL
    files: ['views/**/*.ejs', 'public/**/*.*'], // Files to watch
    port: 3000, // Browsersync port
    notify: false, // Hide the notification
    reloadDelay: 1000 // Delay to reload the browser
});

app.get("/", (req, res) => {
    res.send("Surver is running, Welcome")
})

let posts = [
    {
        id: "1a",
        username: "rajit",
        content: "I love coding"
    },
    {
        id: "2a",
        username: "sonu",
        content: "I love reading"
    },
    {
        id: "2b",
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

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.send("req is working")
})
