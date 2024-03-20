 const mongoDBSchema = require('../model/TaskSchema')

const getAlltasks = async(req, res) =>{
    try {
        const tasks = await mongoDBSchema.find({});
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({"error" : '500 bad request'})
    }
}

const createtasks = async(req, res) => {
    try {
        const Createtask = await mongoDBSchema.create(req.body); 
         res.status(201).json({Createtask});
    } catch (error) {
        res.status(500).json({"error": '500 bad request'})
    }
};


const  gettasks = async (req, res) =>{
    try {
        const { id: taskID } = req.params
  const task = await mongoDBSchema.findOne({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }
  res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({"error": '500 bad request'})
    }
}

const updatetasks = async (req, res) => {
    try {
      const { id: taskID } = req.params;
      console.log('Task ID:', taskID);
      console.log('Request Body:', req.body);
      
      const task = await mongoDBSchema.findByIdAndUpdate(
          { _id: taskID },
          req.body, {
            new: true,
            runValidators: true,
          });
  
      console.log('Updated Task:', task);
  
      if (!task) {
        return res.status(404).json({ error: `No task with id: ${taskID}` });
      }
  
      return res.status(200).json({ task });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: '500 bad request' });
    }
  };
  


const deletetasks = async(req, res) =>{
   try {
    // console.log("hello");
    const {id:taskID} = req.params;
    const task=await mongoDBSchema.findByIdAndDelete({_id: taskID})
    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
      }
      res.status(200).json({ task })
   } catch (error) {
    res.status(500).json({"error": '500 bad request'})
   }
}

module.exports={
    getAlltasks,
    createtasks,
    gettasks,
    updatetasks,
    deletetasks,
}


// ROUTES 

// 1. app.get('/api/v1/tasks') ..... - get all the tasks
// 1. app.post('/api/v1/tasks') ..... - create a new task
// 1. app.get('/api/v1/tasks/:id') ..... - get single tasks
// 1. app.patch('/api/v1/tasks/:id') ..... - update  tasks
// 1. app.delete('/api/v1/tasks/:id') ..... - delete tasks