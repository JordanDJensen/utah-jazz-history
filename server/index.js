let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/social");
mongoose.connect("mongodb://localhost:27017/roster");


let app = express();
const PORT = process.env.PORT || 8080;

let socialRouter = require("./routes/social-route.js");
let rosterRouter = require("./routes/roster-route.js");


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.use("/social", socialRouter);
app.use("/roster", rosterRouter);

app.listen(PORT, () =>{
    console.log(`Starting up server on ${PORT}`)
})