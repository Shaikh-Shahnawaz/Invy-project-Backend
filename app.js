const express = require('express')
require("dotenv").config();
const cors = require("cors");
const app = express()

// let corsOptions = {
//     origin:'http://localhost:8088'
// }

// routers

const PORT = process.env.PORT 
const HOST = process.env.HOST

require('./models')


// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// routes middleware
const router = require('./routes/authenticationRoutes')
app.use("/api/authentication", router);


// server listen
app.listen(PORT,()=>{
    console.log(`Server running at ${PORT} `)
})


// Handling non matching request from the client
app.use((req, res, next) => {
  res.status(404).send("<h1> 404! Page not found on the server</h1>");
});

// // central error handler middleware
// app.use(centralErrorHandler);


module.exports = app;