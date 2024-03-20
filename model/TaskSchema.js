const mongoose = require('mongoose')

const TaskSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: [20 , 'Too long name']
      },
    completed :{
     type :Boolean,
     default : false
    } 
})

module.exports = mongoose.model('Task' , TaskSchema );