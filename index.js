import express from "express";
import path from "path"
import { v4 as uuidv4 } from "uuid";
import methodOverride from "method-override";


const __dirname = path.resolve();



const app = express();

const PORT = 8000;

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"))


app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
})

app.get("/", (req, res) => {
    res.send("Surver is running, Welcome")
})

let posts = [
    {
        id: uuidv4(),
        username: "rajit",
        content: "I love coding"
    },
    {
        id: uuidv4(),
        username: "sonu",
        content: "I love reading"
    },
    {
        id: uuidv4(),
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
    let id = uuidv4();
    let { username, content } = (req.body)
    posts.push({id, username, content})
    res.redirect("/posts")
    res.send("Post request")
})

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.render("show.ejs", {post})
    // res.send("req is working")
})

app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content
    console.log(id);
    console.log(newContent);
    let post = posts.find((p) => id === p.id);
    post.content = newContent
    console.log(post);
    res.redirect("/posts")
})

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);

    res.render("edit.ejs", {post})
})
