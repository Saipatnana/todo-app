import React, { useState } from 'react';

// TaskInput component for adding new tasks
const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');// State to hold the value of the new task

   // Function to handle adding a new task
  const handleAddTask = () => {
    if (task.trim()) { // Check if the task is not empty
      addTask(task); // Call the addTask function passed as a prop
      setTask(''); // Reset the input field
    }
  };
  const custom = {
    backgroundColor:"#5848ef"
  }

  return (
    <div className="mb-3">
        <h3>Create Task</h3>    
      <input
        type="text"
        className="form-control pt-3 pb-3"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New Task"
      />
      <button className="btn btn-primary mt-3" onClick={handleAddTask}  style={custom}>
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
