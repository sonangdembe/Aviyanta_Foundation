import mongoose from "mongoose";

/**
 * title - string
 * description - string
 * isCompleted - boolean
 * isDeleted - boolean
 * createdAt - date
 * updatedAt - date
 */

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: false,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    required: false,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;