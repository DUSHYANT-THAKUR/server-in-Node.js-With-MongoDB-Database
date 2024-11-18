const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000
const corOptions = {
origin:"http://localhost:5000",
methods:"GET,POST,PUT,DELETE",
allowedHeaders: "Content-Type, Authorization", // Allow only these headers
credentials: true, 
}
app.use(cors(corOptions));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(require("./Route/route"))
app.listen(port,()=>{
console.log(`server is running on the port ${port}`)
})