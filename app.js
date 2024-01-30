const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UserRoutes = require ('./Routes/UserRouter')

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
const MONGODB_URI = 'mongodb://localhost:27017/devNuxes';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


// Routes
app.use('/api/users', UserRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});













// const express = require('express')
// const mongoose = require('mongoose')
// const bodyParser = require('body-parser');
// const UserRoutes = require('./Routes/UserRouter');
// require("dotenv").config();

// const app = express()


// // middleware
// app.use(bodyParser.json());
// app.use((req, res, next) => {
//     console.log(req.path, req.method);
//     next();
//   });


// // api_routes
// const userRouter = express.Router();
// UserRoutes(userRouter);
// app.use("/api/submit", userRouter);

// // MONGOBD connection
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => {
//     //listening to the request
//     app.listen(process.env.PORT, () => {
//       console.log(
//         " Successfully Connected to the DataBase & listening to the port",
//         process.env.PORT
//       );
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
