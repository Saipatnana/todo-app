import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

// TaskList component for displaying the list of tasks
const TaskList = ({ tasks, deleteTask, editTask, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(null); // State to track which task is being edited
  const [editText, setEditText] = useState(''); // State to hold the edited text

  // Function to handle the edit button click
  const handleEdit = (task) => {
    setIsEditing(task.id); // Set the id of the task being edited
    setEditText(task.text); // Function to save the edited task
  };

  // Function to save the edited task
  const handleSaveEdit = (id) => {
    editTask(id, editText); // Call the editTask function passed as a prop
    setIsEditing(null); // Reset the editing state
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <div className="alert alert-info text-center" role="alert">
          No tasks available.
        </div>
      ) : (
        <ul className="list-group custom-task-list">
        <h3>My Tasks</h3>
          {tasks.map((task) => (
            <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div className='d-flex align-items-center w-80'>
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                />
                {isEditing === task.id ? (
                  <>
                    <input
                      type="text"
                      className="form-control d-inline w-50 me-2"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <button className="btn btn-primary btn-sm" onClick={() => handleSaveEdit(task.id)}>
                      Save
                    </button>
                  </>
                ) : (
                  <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.text}
                  </span>
                )}
              </div>
              <div className='d-flex align-items-center'>
                <button className="btn btn-sm me-2" onClick={() => handleEdit(task)}>
                  <FaEdit size={20}/>
                </button>
                <button className="btn btn-sm" onClick={() => deleteTask(task.id)}>
                  <MdOutlineDelete size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;