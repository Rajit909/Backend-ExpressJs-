import mongoose from "mongoose";

import Chat from "../models/chat.js"

const connectToDB = ()=> {
    mongoose.connect(process.env.MONGO_URL)
    .then((conn) => {
        console.log(`Connected DB : ${conn.connection.host}`);
    })
    .catch((error) => {
        console.log(error.message);
        process.exit(1);
    });
};

// let chats = [
//     {
//         from: "john",
//         to: "devid",
//         msg: "How are you?",
//         created_at: new Date()
//     },
//     {
//         from: "priya",
//         to: "prince",
//         msg: "How are you?",
//         created_at: new Date()
//     },
//     {
//         from: "shophi",
//         to: "lannin",
//         msg: "How are you?",
//         created_at: new Date()
//     },
// ]

// Chat.insertMany(chats)
// console.log(chats);



export default connectToDB