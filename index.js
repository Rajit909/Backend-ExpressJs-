import express from "express";
import path from "path"

const app = express();

const PORT = 8000;

app.set("view engine", "ejs")
// app.set("views", path.join(__dirname, "/views"))
// app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
})

app.get("/", (req, res) => {
    res.send("Surver is running, Welcome")
})