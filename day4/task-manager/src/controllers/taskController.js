import {Router} from 'express';
import Task from "../models/tasks.js";
const taskController = Router();

taskController.post("/create", async(req,res)=>{
    const data = req.body;

if(data.title == null){
    res.status(400).json({message : "title cannot be empty"});
}
if(data.description == null){
    res.status(400).json({message : "descriptions cannot be empty"});
}
if(data.description == 20){
    res.status(400).json({message : "descriptions cannot be more than 20 characters"});
}



    const task = new Task({
        title : data.title,
        description : data.description,
    });
    try{
        await task.save();
        console.log("task created")

        res.status(200).json({
        message : "task created"
        })
      
    }catch(err){
        console.error("task not created: ", err);

       

        res.status(500).json({
            message :"task not created" 
        });

        
    }
});


taskController.get("/list",async(req,res)=>{
    try {
        const tasks = await Task.find({ isDeleted: false }).sort({ createdAt: -1 });
        console.log("tasks", tasks)
        res.status(200).json({
          tasks,
        });
      } catch (err) {
        console.error("task fetching failed: ", err);
    
        res.status(500).json({
          message: "Error fetching tasks",
        });
      }

});

///--------------delete------------------------------------

taskController.delete("/remove/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      await Task.updateOne({ _id: id }, { $set: { isDeleted: true } });
      res.status(200).json({ message: "Task deleted with id " + id });
    } catch (err) {
      console.error("An error occurred while deleting the task: ", err);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the task." });
    }
  });
  
  taskController.get("/complete/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      await Task.updateOne({ _id: id }, { $set: { isCompleted: true } });
      res.status(200).json({ message: "Task completed with id " + id });
    } catch (err) {
      console.error("An error occurred while completing the task: ", err);
      res
        .status(500)
        .json({ error: "An error occurred while completing the task." });
    }
  });




export default taskController;