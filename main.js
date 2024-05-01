import mongoose from "mongoose";

main()
  .then((res) => {
    console.log("Connection successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// const adminSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     role: String,
// })

// const Admin = mongoose.model("Admin", userSchema)
const User = mongoose.model("User", userSchema);

// isert one user
// const user2 = new User({
//     name: "john",
//     email: "john909@gmail.com",
//     age: "25"
// })
// user2.save().then((res)=>{
//     console.log("user saved success");
// }).catch(err=> console.log(err))

// insert many user
// User.insertMany([
//     {name: "Tom", email: "tom909@gmail.com", age: 26},
//     {name: "Roy", email: "roy909@gmail.com", age: 24},
//     {name: "Bruce", email: "bruce909@gmail.com", age: 28},

// ]).then((res)=>{
//     console.log("user saved success");
// }).catch(err=> console.log(err))

// find user data
await User.find().then((data) => {
  console.log(data);
});

// update one

// User.updateOne({name:"john"},{age:22}).then((res)=>{
//     console.log(res);
// }).catch(err => console.log(err))

// update Many users data
// User.updateMany({age: 24},{age:30}).then((res)=>{
//         console.log(res);
//     }).catch(err => console.log(err))

// findOneAndUpdate
// User.findOneAndUpdate({name: "Raj"},{age: 24}, {new: true}).then((res)=>{
//     console.log(res);
//     }).catch(err => console.log(err))

// Updatmanye
// User.updateMany({age: {$gte: 24}},{age: 27}, {new: true}).then((res)=>{
//     console.log(res);
//     }).catch(err => console.log(err))

// User.findByIdAndUpdate({_id:"6629eda786794fed541093ba"},{age: 24}, {new: true}).then((res)=>{
//         console.log(res);
//         }).catch(err => console.log(err))

// findAndDeleteOne
// User.deleteOne({ name: "Raj" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// // deleteMany
// User.deleteMany({age: {$gt: 27}})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min:1,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  },
  discount:{
    type: String,
    enum: ["fiction", "si-fi"]
  }

});

const Book = mongoose.model("Book", bookSchema);

const book1 = new Book({
  title: "Java",
  author: "abc",
  price: 999
});

book1
  .save()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
