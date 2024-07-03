# To-Do List Application

This is a simple To-Do List application built with React. The application allows users to add, view, edit, and delete tasks. It also includes features like marking tasks as completed and saving tasks to local storage to maintain persistence across page reloads.

![Todos app Preview](https://res.cloudinary.com/dxcob4mbd/image/upload/v1720018065/y6jarnq7ghy2mrnx3n0c.png)
![Todos app Preview in tasks](https://res.cloudinary.com/dxcob4mbd/image/upload/v1720018065/pu2esyuvkjauhrbctmsf.png)

## Features

- Add new tasks
- View a list of tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Persist tasks in local storage
- Responsive design using Bootstrap

## Technologies Used

- React
- Bootstrap
- React Icons

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/todo-list-app.git
cd todo-list-app
```

2. Install dependencies:

```bash
npm install
```
### Running the Application:

To run the application in development mode:
```bash
npm Start
```
Open http://localhost:3000 to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

This will create a build folder with all the static files needed to deploy the application.

# Project Structure
```bash
todo-list-app/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── TaskInput.js
│   │   ├── TaskList.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   ├── custom.css
│   └── ...
│
├── package.json
├── README.md
└── ...

```

# Usage
### Adding a Task
- Type a task in the input field.
- Press the "Add Task" button or press Enter.
- The task will be added to the list below.
### Editing a Task
- Click the "Edit" button next to the task you want to edit.
- Modify the task text in the input field that appears.
- Click the "Save" button to save the changes.
### Deleting a Task
- Click the "Delete" button next to the task you want to delete.
- The task will be removed from the list.
### Marking a Task as Completed
- Click the checkbox next to the task you want to mark as completed.
- The task text will be styled with a strikethrough to indicate completion.
