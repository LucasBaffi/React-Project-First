import React from 'react';
import './style.css'

const ToDo = (props) => {
  const { tasks, toggleTaskCompletion } = props;

  return (
    <div>
      <ul>
        {tasks.map((task, index) => {
          const liStyle = task.completed ? { textDecoration: 'line-through' } : {};
          return (
            <li key={index} style={liStyle}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              <span>{task.task}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDo;
