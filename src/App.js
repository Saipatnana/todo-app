import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

const App = () => {
  // Initialize the state with tasks from localStorage or an empty array
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });


  // Save tasks to localStorage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task
  const addTask = (text) => {
    setTasks([...tasks, { id: uuidv4(), text, completed: false }]);
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Function to edit a task
  const editTask = (id, text) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, text } : task)));
  };

  // Function to toggle the completion state of a task
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="backgound">
      <div className="container bg-white p-5 rounded-4 mb-auto mt-5 m-sm-20 m-20">
        <h1 className="text-center mb-4">Todos</h1>
        <TaskInput addTask={addTask} />
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
};

export default App;
