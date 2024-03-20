const express = require('express')
const app = express()
const tasks = require('./routers/tasks');
const port = 3001
const connectDB = require('./MongoDB/connectDB');
require('dotenv').config();

// MIDDLEWARE
app.use(express.static('./public'))
app.use(express.json()); // if we dont use it we wont get req.body
 

// [Redirecting it to routes]
app.use('/api/v1/tasks', tasks);


// Routes POSTMAN TESTING 
app.get('/', (req, res) => {
  res.send('task manager')
})


// ConnectDB is created in logic that if database is connected then only port should work otherwise port should be killed [ STEP 2 ]
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } 
  catch (error) {
    console.log(error)
  }
}
start();
