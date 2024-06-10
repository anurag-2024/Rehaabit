import Tasks from '../models/Task.model.js'

export const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        if (!title || !description || !status) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const task = new Tasks({
            id: req.user.id,
            title,
            description,
            status
        });
        await task.save();
        return res.status(201).json({ message: "Task created successfully" });
    }
    catch (err) {
        return res.status(500).json({ message: "Unable to create task" });
    }
}

export const getTasks = async (req, res) => {
    try {
        const tasks = await Tasks.find({ id: req.user.id });
        return res.status(200).json(tasks);
    }
    catch (err) {
        return res.status(500).json({ message: "Unable to fetch tasks" });
    }
}

export const getTask = async (req, res) => {
    try {
        const task = await Tasks.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        return res.status(200).json(task);
    }
    catch (err) {
        return res.status(500).json({ message: "Unable to fetch task" });
    }
}

export const updateTask = async (req, res) => {
    try {
       const task ={};
        if(req.body.title){
            task.title=req.body.title;
        }
        if(req.body.description){
            task.description=req.body.description;
        }
        if(req.body.status){
            task.status=req.body.status;
        }
        if (!task.title && !task.description && !task.status) {
            return res.status(400).json({ message: "Atleast one field is required" });
        }
        const updatedTask = await Tasks.findByIdAndUpdate(req.params.id, task, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        return res.status(200).json({ 
            task: updatedTask,
            message: "Task updated successfully" 
        });
    }
    catch (err) {
        return res.status(500).json({ message: "Unable to update task" });
    }
}

export const deleteTask = async (req, res) => {
    try {
       const task =await Tasks.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        await Tasks.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Task deleted successfully" });
    }
    catch (err) {
        return res.status(500).json({ message: "Unable to delete task" });
    }
}