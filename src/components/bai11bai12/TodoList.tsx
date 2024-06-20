import React, { useState } from 'react';
import './TodoList.css';

interface Task {
  id: number;
  text: string;
  priority: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Xây dựng thành Header', priority: 'Khẩn cấp', completed: false },
    { id: 2, text: 'Xây dựng thành Menu', priority: 'Quan trọng', completed: false },
    { id: 3, text: 'Fix lỗi đăng nhập', priority: 'Bình thường', completed: false },
    { id: 4, text: 'Đi chơi', priority: 'Không quan trọng', completed: false },
  ]);

  const handleComplete = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div className="todo-list">
      <h2>Danh sách công việc</h2>
      <div className="filter-add">
        <input type="text" placeholder="Lọc công việc theo cấp độ" />
        <button className="add-button">Thêm</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input 
              type="checkbox" 
              checked={task.completed}
              onChange={() => handleComplete(task.id)} 
            />
            <span>{task.text}</span>
            <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
            <button className="edit-button">Sửa</button>
            <button className="delete-button" onClick={() => handleDelete(task.id)}>Xóa</button>
          </li>
        ))}
      </ul>
      <div className="footer">
        <span>Số công việc hoàn thành: {completedCount}</span>
        <button className="complete-all-button">Hoàn thành tất cả</button>
        <button className="delete-all-button">Xóa tất cả</button>
      </div>
    </div>
  );
}

export default TodoList;