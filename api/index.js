const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
//multer is needs to be added to upload images
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true,
})
.then(console.log("Connected to MongoDB check1"))
.catch(err=>console.log(err));

//for file upload, save to images folder, name provided
const storage = multer.diskStorage({
    destination:(req, file,cb) => {
        cb(null, "images");
    },
    filename:(req,file,cb) => {
        //use 1565894747768.jpeg string only when testing using postman- when we add client form change to req.body.name
        cb(null, req.body.name);
    },
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file has been uploaded");
});
// end of file upload

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);


app.listen("5000", () => {
    console.log("Backend is lama running");
});