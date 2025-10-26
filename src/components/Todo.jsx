// src/components/TaskManager.jsx
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "./Button";
import Card from "./Card";

export default function Todo() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!newTask.trim()) return;
    const task = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
    };
    setTasks([task, ...tasks]);
    setNewTask("");
  };

  const toggleTask = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <Card>
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
          className="w-full sm:flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
        />
        <Button variant="primary" onClick={addTask}>
          Add Task
        </Button>
      </div>

      <div className="flex justify-center gap-2 mb-5">
        <Button
          variant={filter === "all" ? "primary" : "secondary"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "active" ? "primary" : "secondary"}
          onClick={() => setFilter("active")}
        >
          Active
        </Button>
        <Button
          variant={filter === "completed" ? "primary" : "secondary"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </div>

      {filteredTasks.length > 0 ? (
        <ul className="space-y-3">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center p-3 rounded-md bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            >
              <span
                onClick={() => toggleTask(task.id)}
                className={`flex-1 cursor-pointer ${
                  task.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                {task.text}
              </span>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No tasks found.
        </p>
      )}
    </Card>
  );
}
