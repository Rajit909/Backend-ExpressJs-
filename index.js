import express from "express";

let app = express()

let PORT = 8000;

app.get('/', (req, res) => {
    res.send("<h1>Hello world</h1>")
})
app.get('/search', (req, res) => {
    let {q }= req.query
    if(!q){
        res.send("Nothing searched!")
    }
    res.send(`Search query is : ${q}`)
})
app.get('/:id/:user', (req, res) => {
    let {id, user} = req.params;
    res.send(` <h4> Welcome ${user} ,</h4> <h4> your id is : ${id} </h4>`)
})

app.listen(PORT, ()=>{
    console.log(`App is running on PORT ${PORT} `);
})