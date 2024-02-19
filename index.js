const express = require("express")


let app = express()
const path = require("path")

let PORT = 8000;

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, "public")))


app.get("/", (req, res)=>{
    res.render("home.ejs")
})
app.get("/ig/:username", (req, res)=>{
    let { username } = req.params;
    const instaData = require("./data.json")
    const data = instaData[username]
    if(data){
        res.render("insta.ejs", {data})
    }else{
        res.render("error.ejs") 
    }
})





// app.get('/', (req, res) => {
//     res.send("<h1>Hello world</h1>")
// })
// app.get('/search', (req, res) => {
//     let {q }= req.query
//     if(!q){
//         res.send("Nothing searched!")
//     }
//     res.send(`Search query is : ${q}`)
// })
// app.get('/:id/:user', (req, res) => {
//     let {id, user} = req.params;
//     res.send(` <h4> Welcome ${user} ,</h4> <h4> your id is : ${id} </h4>`)
// })

app.listen(PORT, ()=>{
    console.log(`App is running on PORT ${PORT} `);
})