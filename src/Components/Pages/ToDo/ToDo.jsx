import React, { useState } from "react";
import styles from "./ToDo.module.css";

export default function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  function generateId() {
    return Math.random().toString(36).slice(0, 9);
  }

  function addTask() {
    if (!value.trim()) return;

    const newTask = {
      id: generateId(),
      text: value,
      favorite: false,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setValue("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function toggleFavorite(id) {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, favorite: !t.favorite } : t))
    );
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  return (
    <div className={styles.todo_wrapper}>
      <h2>To-Do List</h2>
      <div className={styles.todo_input}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Hew Task..."
        />
        <button className={styles.new_task} onClick={addTask}>
          Add New Task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div className={styles.item_wrapper}>
              <div className={task.completed ? styles.completed : ""}>
                <button
                  className={styles.btn_circle}
                  onClick={() => toggleCompleted(task.id)}
                >
                  <i
                    className={
                      !task.completed
                        ? "ri-checkbox-blank-circle-line"
                        : " ri-checkbox-circle-line"
                    }
                  ></i>
                </button>
                <span>{task.text}</span>
              </div>
              <div className={styles.item_inner_2}>
                <button className={styles.star} onClick={() => toggleFavorite(task.id)}>
                  <i
                    className={
                      !task.favorite ? "ri-star-line" : "ri-star-fill"
                    }
                  ></i>
                </button>

                <button className={styles.trash} onClick={() => deleteTask(task.id)}>
                  <i class="ri-delete-bin-line"></i>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
