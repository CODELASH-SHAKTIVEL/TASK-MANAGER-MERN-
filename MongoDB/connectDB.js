
const mongoose = require('mongoose');

// ConnectDB is created in logic that if database is connected then only port should work otherwise port should be killed [ STEP 2 ]
const connectDB = (url) =>{
    return mongoose.connect(url, {
        useUnifiedTopology: true,
        useFindAndModify : false ,
        useNewUrlParser: true,
        useCreateIndex : true
    })
} 

module.exports = connectDB;

// AFTER CONNECT STATEMENT THE USETHING IS USED TO AVOID DEPRECATIONWARING [STEP 1 ]
// mongoose.connect(ConnectionString, {
//     useUnifiedTopology: true,
//     useFindAndModify : false ,
//     useNewUrlParser: true,
//     useCreateIndex : true
// })
// .then(()=>{
//     console.log('CONNECTED TO DATABASE...');
// })
// .catch((err)=>{
//     console.error("COULD NOT CONNECT TO THE DATABASE", err);
// })





